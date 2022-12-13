import logo from '../../assets/shared/desktop/logo.svg'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
    return(
        <section className='bg-101010 flex flex-col items-center'>
            <nav className='flex w-[70%] justify-between pt-[75px] relative md:flex-col md:pt-[60px] xs:justify-center md:w-[80%] xs:w-[90%] xs:pt-0'>
                <div className='w-[101px] bg-D87D4A h-[4px] absolute top-0 xs:relative xs:mx-auto xs:mb-[48px]'></div>
                <img src={logo} alt="logo" className='cursor-pointer md:w-[25%] md:mb-[32px] sm:w-[32.5%] xs:w-[40%] xs:mx-auto'/>
                <div className='flex xs:flex-col items-center'>
                    <p className='subtitle tracking-[2px] text-FFFFFF mr-[34px] cursor-pointer hover:text-D87D4A xs:mr-0'>HOME</p>
                    <p className='subtitle tracking-[2px] text-FFFFFF mr-[34px] cursor-pointer hover:text-D87D4A xs:mr-0'>HEADPHONES</p>
                    <p className='subtitle tracking-[2px] text-FFFFFF mr-[34px] cursor-pointer hover:text-D87D4A xs:mr-0'>SPEAKERS</p>
                    <p className='subtitle tracking-[2px] text-FFFFFF cursor-pointer hover:text-D87D4A'>EARPHONES</p>
                </div>
            </nav>
            <div className='w-[70%] flex items-end mt-[36px] md:flex-col md:w-[80%] xs:w-[90%]'>
                <p className='body text-FFFFFF/50 w-[100%] xs:text-center'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&#8216;re open 7 days a week.</p>
                <div className='flex w-[100%] justify-end items-center md:hidden'>
                    {/* icon class located on App.css. icon class mainly for hover effect */}
                    <img src={facebook} alt='facebook' className='icon mr-[16px] cursor-pointer hover:text-D87D4A'/>
                    <img src={twitter} alt='twitter' className='icon mr-[16px] cursor-pointer'/>
                    <img src={instagram} alt='instagram' className='icon cursor-pointer'/>
                </div>
            </div>
            <div className='w-[70%] md:w-[80%] mt-[56px] mb-[48px] flex xs:flex-col xs:items-center'>
                <p className='body text-FFFFFF/50 w-[100%]'>Copyright 2021. All Rights Reserved</p>
                <div className='hidden w-[40%] justify-end items-center md:flex xs:mt-[48px]'>
                    {/* icon class located on App.css. icon class mainly for hover effect */}
                    <img src={facebook} alt='facebook' className='icon mr-[16px] cursor-pointer hover:text-D87D4A'/>
                    <img src={twitter} alt='twitter' className='icon mr-[16px] cursor-pointer'/>
                    <img src={instagram} alt='instagram' className='icon cursor-pointer'/>
                </div>
            </div>
        </section>
    )
}