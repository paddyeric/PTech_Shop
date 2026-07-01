import { SiInstagram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React from 'react'


const Footer = () => {
    return (
        <div className="flex justify-between items-center text-white bg-[#0F172A] h-20 p-8 w-full mt-6">
            <div>
                <img src='https://res.cloudinary.com/dxxc4e93b/image/upload/v1781692360/cartimage_jywuu5.png' alt="Cart Img" className='h-[50px]' />
            </div>

            <p className="text-center">&copy; 2026 PTech Shop. <br /> All Rights Reserved Terms of Use and Privacy Policy.</p>

            <div className="flex space-x-4">
                <a href="https://web.facebook.com/" target="_blank" className="text-decoration-none text-white"><BsFacebook size={25} /></a>
                <a href="https://x.com/" target="_blank" className="text-decoration-none text-white"><AiFillTwitterCircle size={28} /></a>
                <a href="https://www.instagram.com/" target="_blank" className="text-decoration-none text-white"><SiInstagram size={25} /></a>
            </div>
        </div>
    )
}

export default Footer
