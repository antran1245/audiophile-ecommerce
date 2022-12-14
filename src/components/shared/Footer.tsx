import logo from "../../assets/shared/desktop/logo.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <section className="flex flex-col items-center bg-101010">
      <nav className="relative flex w-[70%] justify-between pt-[75px] md:w-[80%] md:flex-col md:pt-[60px] xs:w-[90%] xs:justify-center xs:pt-0">
        <div className="absolute top-0 h-[4px] w-[101px] bg-D87D4A xs:relative xs:mx-auto xs:mb-[48px]"></div>
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer md:mb-[32px] md:w-[25%] sm:w-[32.5%] xs:mx-auto xs:w-[40%]"
        />
        <div className="flex items-center xs:flex-col">
          <p className="subtitle mr-[34px] cursor-pointer tracking-[2px] text-FFFFFF hover:text-D87D4A xs:mr-0">
            HOME
          </p>
          <p className="subtitle mr-[34px] cursor-pointer tracking-[2px] text-FFFFFF hover:text-D87D4A xs:mr-0">
            HEADPHONES
          </p>
          <p className="subtitle mr-[34px] cursor-pointer tracking-[2px] text-FFFFFF hover:text-D87D4A xs:mr-0">
            SPEAKERS
          </p>
          <p className="subtitle cursor-pointer tracking-[2px] text-FFFFFF hover:text-D87D4A">
            EARPHONES
          </p>
        </div>
      </nav>
      <div className="mt-[36px] flex w-[70%] items-end md:w-[80%] md:flex-col xs:w-[90%]">
        <p className="body w-[100%] text-FFFFFF/50 xs:text-center">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we&#8216;re open 7 days a week.
        </p>
        <div className="flex w-[100%] items-center justify-end md:hidden">
          {/* icon class located on App.css. icon class mainly for hover effect */}
          <img
            src={facebook}
            alt="facebook"
            className="icon mr-[16px] cursor-pointer hover:text-D87D4A"
          />
          <img
            src={twitter}
            alt="twitter"
            className="icon mr-[16px] cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            className="icon cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-[56px] mb-[48px] flex w-[70%] md:w-[80%] xs:flex-col xs:items-center">
        <p className="body w-[100%] text-FFFFFF/50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="hidden w-[40%] items-center justify-end md:flex xs:mt-[48px]">
          {/* icon class located on App.css. icon class mainly for hover effect */}
          <img
            src={facebook}
            alt="facebook"
            className="icon mr-[16px] cursor-pointer hover:text-D87D4A"
          />
          <img
            src={twitter}
            alt="twitter"
            className="icon mr-[16px] cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            className="icon cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
