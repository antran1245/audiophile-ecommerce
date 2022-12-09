import React from 'react'
import '../sass/home.scss'

export default function Home() {
    return(
        <main>
            <section className="bg-[#191919] flex justify-center">
                <div className="bg-[#191919] relative w-[70%] md:w-[100%] flex items-center md:justify-center">
                    <div className="w-[30%] lg:w-[50%] absolute z-[2] md:text-center xs:w-[80%]">
                        <p className="overline-text text-FFFFFF/50">NEW PRODUCT</p>
                        <h1 className="text-FFFFFF mt-[24px]">XX99 Mark II Headphones</h1>
                        <p className="body text-FFFFFF/75 mt-[24px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="button-1 mt-[40px]">SEE PRODUCT</button>
                    </div>
                    <img src={require('../assets/home/desktop/image-hero.jpg')} alt="headphone" className='ml-[100px] md:hidden'/>
                    <img src={require('../assets/home/tablet/image-header.jpg')} alt="headphone" className='sm:hidden md:block hidden'/>
                    <img src={require('../assets/home/mobile/image-header.jpg')} alt="headphone" className='xs:block hidden'/>
                </div>
            </section>
        </main>
    )
}