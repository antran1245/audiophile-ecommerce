import React from "react";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
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
          <div className="card">
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
      <section>
        <div className="w-[70%] rounded-[8px] pt-[96px] pb-0"></div>
      </section>
    </main>
  );
}
