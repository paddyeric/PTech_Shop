import React from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Footer from '../components/Footer'


const HomePage = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row-reverse space-y-4 dark:text-white mt-4 mx-4'>
                <div className='flex-1'>
                    <div className='h-full flex-center'>
                        <img src='https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692362/cyan_honf4l.png' alt='img' />
                    </div>
                </div>

                <div className='flex-1 space-y-4 mr-8'>
                    <div className='text-5xl font-black md:text-7xl text-black'>PTech Shop</div>
                    <div className='font-medium md:text-xl text-black'>
                        Welcome to Your Trusted Tech Store!
                        Discover the latest smartphones, laptops, PlayStations, accessories, and
                        other top-quality electronic gadgets at unbeatable prices. At PTech Shop,
                        we combine quality, affordability, and excellent customer service to bring you the best shopping experience.
                        Whether you're upgrading your device, gaming, or shopping for the latest tech, we've got you covered.
                        Shop smart. Shop quality. Shop PTech!
                    </div>

                    <div className='flex items-center space-x-6'>
                        <div className=' font-semibold text-4xl text-black mt-3'>
                            20% Discount
                        </div>

                        <Link to={'/shop'}>
                            <div className='space-x-10'>
                                <button className='active:scale-50 transition  bg-black text-white p-2 w-44 hover:bg-gray-900 active:bg-gray-700 mt-4 dark:bg-white dark:text-black'>
                                    Shop Now
                                </button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <Categories />
            <Footer />

        </>
    )
}

export default HomePage
