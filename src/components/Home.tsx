import circles from "../assets/home/desktop/pattern-circles.svg";
import ShopOptions from "./shared/ShopOptions";
import BestAudio from "./shared/BestAudio";
import "../sass/home.scss";

export default function Home() {
  return (
    <main>
      {/*
        Top heading -> headphone black background with switching image based on size of screen
        Text will place onto the background image using absolute position
      */}
      <section className="relative flex justify-center bg-[#191919]">
        <div className="relative flex w-[70%] items-center md:w-[100%] md:justify-center">
          <div className="absolute z-[2] w-[40%] xl:mt-[8vw] xl:w-[50%] md:text-center sm:w-[60%] xs:w-[80%]">
            <p className="overline-text text-FFFFFF/50">NEW PRODUCT</p>
            <p className="heading1 xsm:mt-[10px] s:mt-[24px] mt-[24px] text-FFFFFF lg:mt-[10px] md:mt-[24px]">
              XX99 Mark II Headphones
            </p>
            <p className="body mt-[24px] text-FFFFFF/75 lg:mt-[10px] md:mt-[24px] sm:mt-[10px] xs:mt-[24px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="button-1 mt-[40px] lg:mt-[10px] md:mt-[40px] sm:mt-[10px] xs:mt-[28px]">
              SEE PRODUCT
            </button>
          </div>
          <img
            src={require("../assets/home/desktop/image-hero.jpg")}
            alt="headphone"
            className="ml-[100px] lg:mt-[100px] md:hidden"
          />
          <img
            src={require("../assets/home/tablet/image-header.jpg")}
            alt="headphone"
            className="hidden md:block sm:mt-[50px] xs:mt-0 xs:hidden"
          />
          <img
            src={require("../assets/home/mobile/image-header.jpg")}
            alt="headphone"
            className="hidden xs:block"
          />
        </div>
      </section>
      {/* shop options for headphone, speaker, earphone */}
      <ShopOptions />
      {/* 
        ZX9 Speaker Box
      */}
      <section className="relative mt-[168px] flex justify-center overflow-hidden md:mt-[96px] xs:mt-[120px]">
        {/* Ring behind the speaker */}
        <img
          src={circles}
          alt="circles"
          className="absolute bottom-0 z-[1] hidden xl:w-[100%] lg:top-[-30%] lg:block md:top-[-25%] sm:top-[-15%] xs:top-[-10%]"
        />
        <div className="relative flex w-[70%] justify-evenly overflow-hidden rounded-[8px] bg-D87D4A pt-[96px] pb-0 xl:w-[80%] lg:w-[90%] lg:flex-col lg:items-center xs:py-[55px]">
          <img
            src={circles}
            alt="circles"
            className="fit-content absolute left-[-5%] top-0 z-[1] block lg:hidden"
          />
          {/* Speaker image depending on the size of screen (desktop, tablet, mobile) */}
          <img
            src={require("../assets/home/desktop/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] mb-[-29px] block w-[100%] max-w-[410px] xl:w-[35%] md:hidden"
          />
          <img
            src={require("../assets/home/tablet/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] hidden w-[30%] max-w-[410px] md:block xs:hidden"
          />
          <img
            src={require("../assets/home/mobile/image-speaker-zx9.png")}
            alt="speaker zx9"
            className="relative z-[1] hidden w-[40%] max-w-[410px] xs:block "
          />
          <div className="relative z-[1] w-[25%] lg:mb-[64px] lg:w-[50%] lg:text-center sm:w-[70%] xs:mb-[0]">
            <p className="heading1 mt-[37px] text-FFFFFF lg:mt-[64px] xs:mt-[32px]">
              ZX9 SPEAKER
            </p>
            <p className="body mt-[24px] mb-[40px] text-FFFFFF xs:mb-[24px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="button-2">SEE PRODUCT</button>
          </div>
        </div>
      </section>
      {/* 
        ZX7 Speaker Box
      */}
      <section id="speaker-short" className="flex justify-center">
        <div className="w-[70%] py-[101px] px-[95px] xl:w-[80%] lg:w-[90%] md:px-[62px] xs:px-[24px]">
          <p className="heading4">ZX7 SPEAKER</p>
          <button className="button-2 md:mt-[32px]">SEE PRODUCT</button>
        </div>
      </section>
      {/* 
        YX1 Earphones
      */}
      <section className="mt-[48px] flex justify-center">
        <div className="flex w-[70%] items-center justify-between xl:w-[80%] lg:w-[90%] xs:flex-col">
          <picture className="h-[100%] w-[49%] xs:w-[100%]">
            <source
              media="(max-width: 1024px) and (min-width: 480px)"
              srcSet={require("../assets/home/tablet/image-earphones-yx1.jpg")}
            />
            <source
              media="(max-width: 480px) "
              srcSet={require("../assets/home/mobile/image-earphones-yx1.jpg")}
            />
            <img
              src={require("../assets/home/desktop/image-earphones-yx1.jpg")}
              alt="earphone"
              className="h-[100%] w-[100%] rounded-[8px] xs:w-[100%]"
            />
          </picture>
          <div className="h-[100%] w-[49%] rounded-[8px] bg-F1F1F1 py-[101px] pl-[95px] pr-[198px] md:pl-[41px] md:pr-[51px] xs:mt-[24px] xs:h-auto xs:w-[100%] xs:py-[41px] xs:pl-[24px] xs:pr-[56px]">
            <p className="heading4">YX1 EARPHONES</p>
            <button className="button-2 mt-[32px]">SEE PRODUCT</button>
          </div>
        </div>
      </section>
      {/*
        Bringing you the best audio gear
      */}
      <BestAudio />
    </main>
  );
}
