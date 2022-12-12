import React from "react";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import circles from "../assets/home/desktop/pattern-circles.svg";
import "../sass/home.scss";

export default function Home() {
  return (
    <main>
      {/*
        Top heading -> headphone black background with switching image based on size of screen
        Text will place onto the background image using absolute position
      */}
      <section className="flex justify-center bg-[#191919]">
        <div className="relative flex w-[70%] items-center md:w-[100%] md:justify-center">
          <div className="absolute z-[2] w-[40%] xl:w-[50%] md:text-center xs:w-[80%]">
            <p className="overline-text text-FFFFFF/50">NEW PRODUCT</p>
            <h1 className="mt-[24px] text-FFFFFF lg:mt-[10px] md:mt-[24px]">
              XX99 Mark II Headphones
            </h1>
            <p className="body mt-[24px] text-FFFFFF/75 lg:mt-[10px] md:mt-[24px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="button-1 mt-[40px] lg:mt-[10px] md:mt-[40px]">
              SEE PRODUCT
            </button>
          </div>
          <img
            src={require("../assets/home/desktop/image-hero.jpg")}
            alt="headphone"
            className="ml-[100px] md:hidden"
          />
          <img
            src={require("../assets/home/tablet/image-header.jpg")}
            alt="headphone"
            className="hidden md:block xs:hidden"
          />
          <img
            src={require("../assets/home/mobile/image-header.jpg")}
            alt="headphone"
            className="hidden xs:block"
          />
        </div>
      </section>
      {/* 
        Shop options
        Pass Tailwind CSS classes from sass file, home.scss, to elements.
      */}
      <section id="shop">
        <div className={`cards-container`}>
          <div className="card">
            <img src={headphones} alt="headphones" />
            <div>
              <p className="nav-title">HEADPHONES</p>
              <p className="button-3">
                SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
              </p>
            </div>
          </div>
          <div className="card m-auto">
            <img src={speakers} alt="speakers" />
            <div>
              <p className="nav-title">SPEAKERS</p>
              <p className="button-3">
                SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
              </p>
            </div>
          </div>
          <div className="card">
            <img src={earphones} alt="earphones" />
            <div>
              <p className="nav-title">EARPHONES</p>
              <p className="button-3">
                SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 
        ZX9 SPEAKER Box
      */}
      <section className="relative flex justify-center overflow-hidden pt-[168px]">

        {/* Ring behind the speaker */}
        <img
          src={circles}
          alt="circles"
          className="absolute z-[1] hidden lg:left-0 lg:top-[-10%] lg:block lg:h-[120%] md:top-[-20%] md:h-[120%] sm:top-[0%] sm:right-0 sm:h-[90%] sm:w-[100%] xs:top-[10%] xs:h-[65%] xs:w-[200%]"
        />
        <div className="relative flex h-[100%] w-[70%] justify-evenly overflow-hidden rounded-[8px] bg-D87D4A pt-[96px] pb-0 xl:w-[80%] lg:w-[90%] lg:flex-col lg:items-center xs:py-[55px]">
          
          <img
            src={circles}
            alt="circles"
            className="absolute top-[-4%] left-[-5%] z-[1] block w-[70%] xl:w-[90%] xl:left-[-13%] lg:hidden"
            />
          {/* Speaker image depending on the size of screen (desktop, tablet, mobile) */}
          <img
            src={require("../assets/home/desktop/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] mb-[-29px] block w-[100%] max-w-[410px] xl:h-[100%] xl:w-[35%] md:hidden"
          />
          <img
            src={require("../assets/home/tablet/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] hidden w-[20%] max-w-[410px] md:block xs:hidden"
          />
          <img
            src={require("../assets/home/mobile/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] hidden w-[30%] max-w-[410px] xs:block "
          />
          <div className="relative z-[1] w-[25%] lg:mb-[64px] lg:w-[50%] lg:text-center xs:mb-[0] xs:w-[60%]">
            <h1 className="mt-[37px] text-FFFFFF lg:mt-[64px] xs:mt-[32px]">
              ZX9 SPEAKER
            </h1>
            <p className="body mt-[24px] mb-[40px] text-FFFFFF xs:mb-[24px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="button-2">SEE PRODUCT</button>
          </div>
        </div>
      </section>
    </main>
  );
}
