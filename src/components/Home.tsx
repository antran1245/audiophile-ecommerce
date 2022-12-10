import React from 'react'
import earphones from  '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphones from  '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from  '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import arrow from '../assets/shared/desktop/icon-arrow-right.svg'
import '../sass/home.scss'

export default function Home() {
    return(
        <main>
            {/*
                Top heading -> headphone black background with switching image based on size of screen
                Text will place onto the background image using absolute position
            */}
            <section className="bg-[#191919] flex justify-center">
                <div className="bg-[#191919] relative w-[70%] md:w-[100%] flex items-center md:justify-center">
                    <div className="w-[40%] xl:w-[50%] absolute z-[2] md:text-center xs:w-[80%]">
                        <p className="overline-text text-FFFFFF/50">NEW PRODUCT</p>
                        <h1 className="text-FFFFFF mt-[24px] lg:mt-[10px] md:mt-[24px]">XX99 Mark II Headphones</h1>
                        <p className="body text-FFFFFF/75 mt-[24px] lg:mt-[10px] md:mt-[24px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="button-1 mt-[40px] lg:mt-[10px] md:mt-[40px]">SEE PRODUCT</button>
                    </div>
                    <img src={require('../assets/home/desktop/image-hero.jpg')} alt="headphone" className='ml-[100px] md:hidden'/>
                    <img src={require('../assets/home/tablet/image-header.jpg')} alt="headphone" className='xs:hidden md:block hidden'/>
                    <img src={require('../assets/home/mobile/image-header.jpg')} alt="headphone" className='xs:block hidden'/>
                </div>
            </section>
            {/* 
                Shop options
            */}
            <section className='flex justify-center mt-[120px] xs:mt-0'>
                <div className={`flex flex-row xs:flex-col w-[70%] xl:w-[80%] lg:w-[90%] items-end`}>
                    <div className='w-[30%] xl:w-[31.5%] lg:w-[33%] xs:w-full h-[284px] lg:h-[217px] m-auto flex flex-col items-center relative'>
                        <img src={headphones} alt="headphones" className='w-[60%] xs:w-[40%] sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[80%] xs:mt-[10px] relative z-[2]'/>
                        <div className='h-[204px] lg:h-[165px] w-full bg-F1F1F1 rounded-[8px] flex justify-end items-center flex-col absolute bottom-0'>
                            <p className='nav-title mb-[17px] cursor-pointer z-[3]'>HEADPHONES</p>
                            <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                        </div>
                    </div>
                    <div className='w-[30%] xl:w-[31.5%] lg:w-[33%] xs:w-full h-[284px] lg:h-[217px] m-auto flex flex-col items-center relative'>
                        <img src={speakers} alt="speakers" className='w-[60%] xs:w-[40%] sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[80%] xs:mt-[10px] relative z-[2]'/>
                        <div className='h-[204px] lg:h-[165px] w-full bg-F1F1F1 rounded-[8px] flex justify-end items-center flex-col absolute bottom-0'>
                            <p className='nav-title mb-[17px] cursor-pointer z-[3]'>SPEAKERS</p>
                            <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                        </div>
                    </div>
                    <div className='w-[30%] xl:w-[31.5%] lg:w-[33%] xs:w-full h-[284px] lg:h-[217px] m-auto flex flex-col items-center relative'>
                        <img src={earphones} alt="earphones" className='w-[60%] xs:w-[40%] sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[80%] xs:mt-[10px] relative z-[2]'/>
                        <div className='h-[204px] lg:h-[165px] w-full bg-F1F1F1 rounded-[8px] flex justify-end items-center flex-col absolute bottom-0'>
                            <p className='nav-title mb-[17px] cursor-pointer z-[3]'>EARPHONES</p>
                            <p className='flex items-center mb-[22px] button-3 z-[3]'>SHOP <img src={arrow} alt='arrow' className='ml-[13px]'/></p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-[70%] pt-[96px] pb-0 rounded-[8px]'></div>
            </section>
        </main>
    )
}