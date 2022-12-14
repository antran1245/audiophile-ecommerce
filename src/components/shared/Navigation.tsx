import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import "../../sass/navigation.scss";

export default function Navigation() {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const transferToPage = (page: string) => {
    setShow(false);
    navigate("/Category/" + page);
  };
  return (
    <div id="container" className="absolute top-0 left-0 z-[4] w-full">
      {/* Default web nav */}
      <nav className="m-auto flex w-[70%] justify-between border-b-[1px] border-FFFFFF/20 pt-[32px] pb-[36px] md:w-[100%] md:justify-between md:px-[40px] sm:pb-[32px] xs:rounded-b-[8px] xs:border-b-0 xs:px-[24px]">
        <div className="flex items-center">
          <img
            src={hamburger}
            alt="hamburger icon"
            className="hidden cursor-pointer md:mr-[42px] md:block xs:mr-[0]"
            onClick={() => setShow(!show)}
          />
          <img
            src={logo}
            alt="logo"
            className="block cursor-pointer xs:hidden"
          />
        </div>
        <img src={logo} alt="logo" className="hidden cursor-pointer xs:block" />
        <div className="block md:hidden">
          <Link
            to=" "
            className="subtitle mr-[34px] text-FFFFFF hover:text-D87D4A"
          >
            HOME
          </Link>
          <Link
            to="/Category/headphones"
            className="subtitle mr-[34px] text-FFFFFF hover:text-D87D4A"
          >
            HEADPHONES
          </Link>
          <a
            href=" "
            className="subtitle mr-[34px] text-FFFFFF hover:text-D87D4A"
          >
            SPEAKERS
          </a>
          <a href=" " className="subtitle text-FFFFFF hover:text-D87D4A">
            EARPHONES
          </a>
        </div>
        <img src={cart} alt="cart" className="object-contain" />
      </nav>
      {/* Tablet/Mobile nav */}
      {/* White scroll down box letting people to navigate to different box */}
      <div
        className={`${
          show ? "down md:flex" : "up"
        } hidden flex-row bg-FFFFFF px-[39px] pt-[56px] pb-[67px] xs:flex-col xs:rounded-b-[8px]`}
      >
        <div className="relative m-auto h-[217px] w-[33%] xs:mb-[16px] xs:w-full">
          <div className="absolute top-[-10px] z-[2] flex w-full justify-center xs:top-[0]">
            <img
              src={headphones}
              alt="headphones"
              className="w-[70%] xs:w-[50%]"
            />
          </div>
          <div className="absolute bottom-0 flex h-[165px] w-full flex-col items-center justify-end rounded-[8px] bg-F1F1F1">
            <p className="nav-title z-[3] mb-[17px] cursor-pointer">
              HEADPHONES
            </p>
            <p
              className="button-3 z-[3] mb-[22px] flex items-center hover:text-D87D4A"
              onClick={() => transferToPage("headphones")}
            >
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
        <div className="relative mx-[10px] h-[217px] w-[33%] xs:mx-0 xs:mb-[16px] xs:w-full">
          <div className="absolute top-[-10px] z-[2] flex w-full justify-center xs:top-[0]">
            <img src={speakers} alt="speakers" className="w-[70%] xs:w-[50%]" />
          </div>
          <div className="absolute bottom-0 flex h-[165px] w-full flex-col items-center justify-end rounded-[8px] bg-F1F1F1">
            <p className="nav-title z-[3] mb-[17px] cursor-pointer">SPEAKERS</p>
            <p className="button-3 z-[3] mb-[22px] flex items-center hover:text-D87D4A">
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
        <div className="relative m-auto h-[217px] w-[33%] xs:w-full">
          <div className="absolute top-[-10px] z-[2] flex w-full justify-center xs:top-[0]">
            <img
              src={earphones}
              alt="earphones"
              className="w-[70%] xs:w-[50%]"
            />
          </div>
          <div className="absolute bottom-0 flex h-[165px] w-full flex-col items-center justify-end rounded-[8px] bg-F1F1F1">
            <p className="nav-title z-[3] mb-[17px] cursor-pointer">
              EARPHONES
            </p>
            <p className="button-3 z-[3] mb-[22px] flex items-center hover:text-D87D4A">
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
