import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripeClient = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

if (!stripeClient) {
  console.warn('Warning: STRIPE_SECRET_KEY is not set. Stripe features will be disabled.');
}

const createStripeCheckoutSession = async (req, res) => {
  try {
    if (!stripeClient) {
      return res.status(500).json({ message: 'Stripe not configured on server.' });
    }

    const { amount, items, currency = 'usd' } = req.body || {};

    let line_items = [];

    if (Array.isArray(items) && items.length > 0) {
      line_items = items.map((it) => ({
        price_data: {
          currency,
          product_data: {
            name: it.name || 'Product',
            description: it.description || '',
          },
          unit_amount: Math.round(Number(it.unit_amount || it.price || 0)),
        },
        quantity: Math.max(1, Number(it.quantity) || 1),
      }));
    } else if (amount) {
      const cents = Number(amount);
      if (Number.isNaN(cents) || cents <= 0) {
        return res.status(400).json({ message: 'Invalid amount provided' });
      }
      line_items = [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Order Total',
              description: 'Purchase from store',
            },
            unit_amount: Math.round(cents),
          },
          quantity: 1,
        },
      ];
    } else {
      return res.status(400).json({ message: 'No items or amount provided' });
    }

    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe session creation failed:', err);
    return res.status(500).json({ message: err.message || 'Stripe session creation failed' });
  }
};

export { createStripeCheckoutSession };
