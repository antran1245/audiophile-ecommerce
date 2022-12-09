import React, { useState } from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'
import hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import earphones from  '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from  '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from  '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import arrow from '../assets/shared/desktop/icon-arrow-right.svg'
import '../sass/navigation.scss'

export default function Navigation() {
    const [show, setShow] = useState<boolean>(false)

    return(
        <div id="container" className='xs:rounded-b-[8px]'>
            {/* Default web nav */}
            <nav className='bg-000000 flex md:justify-between justify-evenly pt-[32px] pb-[36px] sm:pb-[32px] md:px-[40px] xs:px-[24px] xs:rounded-b-[8px]'>
                <div className='flex items-center'>
                    <img src={hamburger} alt='hamburger icon' className='hidden xs:mr-[0] md:block md:mr-[42px] cursor-pointer' onClick={() => setShow(!show)}/>
                    <img src={logo} alt='logo' className='block sm:hidden cursor-pointer'/>
                </div>
                <img src={logo} alt='logo' className='hidden xs:block cursor-pointer'/>
                <div className='block md:hidden'>
                    <a href=' ' className='subtitle text-FFFFFF hover:text-D87D4A mr-[34px]'>HOME</a>
                    <a href=' ' className='subtitle text-FFFFFF hover:text-D87D4A mr-[34px]'>HEADPHONES</a>
                    <a href=' ' className='subtitle text-FFFFFF hover:text-D87D4A mr-[34px]'>SPEAKERS</a>
                    <a href=' ' className='subtitle text-FFFFFF hover:text-D87D4A'>EARPHONES</a>
                </div>
                <img src={cart} alt='cart' className='object-contain'/>
            </nav>
            {/* Tablet/Mobile nav */}
            {/* White scroll down box letting people to navigate to different box */}
            <div className={`${show? 'down' : 'up'} hidden md:flex bg-FFFFFF flex-row xs:flex-col pt-[56px] pb-[67px] px-[39px]`}>
                <div className='relative w-[33%] xs:w-full h-[217px] m-auto xs:mb-[16px]'>
                    <div className='w-full absolute z-[2] flex justify-center top-[-10px] xs:top-[0]'>
                        <img src={headphones} alt="headphones" className='w-[70%] xs:w-[50%]'/>
                    </div>
                    <div className='h-[165px] w-full bg-F1F1F1 absolute bottom-0 rounded-[8px] flex justify-end items-center flex-col'>
                        <p className='nav-title mb-[17px] cursor-pointer z-[3]'>HEADPHONES</p>
                        <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                    </div>
                </div>
                <div className='relative w-[33%] xs:w-full h-[217px] mx-[10px] xs:mx-0 xs:mb-[16px]'>
                    <div className='w-full absolute z-[2] flex justify-center top-[-10px] xs:top-[0]'>
                        <img src={speakers} alt="speakers" className='w-[70%] xs:w-[50%]'/>
                    </div>
                    <div className='h-[165px] w-full bg-F1F1F1 absolute bottom-0 rounded-[8px] flex justify-end items-center flex-col'>
                        <p className='nav-title mb-[17px] cursor-pointer z-[3]'>SPEAKERS</p>
                        <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                    </div>
                </div>
                <div className='relative w-[33%] xs:w-full h-[217px] m-auto'>
                    <div className='w-full absolute z-[2] flex justify-center top-[-10px] xs:top-[0]'>
                        <img src={earphones} alt="earphones" className='w-[70%] xs:w-[50%]'/>
                    </div>
                    <div className='h-[165px] w-full bg-F1F1F1 absolute bottom-0 rounded-[8px] flex justify-end items-center flex-col'>
                        <p className='nav-title mb-[17px] cursor-pointer z-[3]'>EARPHONES</p>
                        <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}