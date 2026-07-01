import React from "react"


const gadgetData = [
    {
        image: 'https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692363/appleproducts2_mz2vcx.jpg',
        name: 'Phones'
    },
    {
        image: 'https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692362/laptops1_k5sprg.jpg',
        name: 'Laptops'
    },
    {
        image: 'https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692362/playstationsprod_fgxdpi.png',
        name: 'Play Station'
    },
]


const Categories = () => {

    return (
        <div className='mt-20'>
            <div className='flex items-center justify-center mb-6'>
                <div className='bg-center text-4xl font-extrabold dark:text-black bg-[url("https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692935/line_jffpwl.png")]'>
                    CATEGORIES
                </div>
            </div>

            <div className='grid grid-cols-1 gap-x-1 sm:gap-y-1 md:grid-cols-2 xl:grid-cols-3'>
                {gadgetData.map((item, id) => (
                    <div key={id}>
                        <div className='max-w-xl cursor-pointer transition transform hover:scale-105 m-4'>
                            <img src={item.image} alt="gadget img" className='' />

                            <div className='flex py-1 px-2'>
                                <p className="bg-black h-15 w-15 rounded-full -mt-5 text-white text-center py-2 px-2 border-8 font-bold">{item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Categories
