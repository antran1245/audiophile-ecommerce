import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BestAudio from "./shared/BestAudio";
import ShopOptions from "./shared/ShopOptions";

export default function Detail() {
  const { state } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({ behavior: "smooth", top: -100 });
  // }, []);
  return (
    <main className="bg-000000 pt-[97px]">
      <div className="bg-FFFFFF">
        <p className="mx-auto w-[70%] pb-[56px] pt-[79px] text-000000/50 xl:w-[80%] lg:w-[90%]">
          <span className="cursor-pointer ">Go Back</span>
        </p>
        <div className="mx-auto mb-[160px] flex w-[70%] xl:w-[80%] lg:w-[90%] md:mb-[120px] xs:flex-col">
          {/* images in picture tag for responsive image */}
          <picture>
            <source
              media="(max-width: 1024px) and (min-width: 480px)"
              srcSet={require(`../assets${state.data.image.tablet.substring(
                state.data.image.tablet.indexOf(
                  "/",
                  state.data.image.tablet.indexOf("/") + 1
                ),
                state.data.image.tablet.length
              )}`)}
            />
            <source
              media="(max-width: 480px)"
              srcSet={require(`../assets${state.data.image.mobile.substring(
                state.data.image.mobile.indexOf(
                  "/",
                  state.data.image.mobile.indexOf("/") + 1
                ),
                state.data.image.mobile.length
              )}`)}
            />
            <img
              src={require(`../assets${state.data.image.desktop.substring(
                state.data.image.desktop.indexOf(
                  "/",
                  state.data.image.desktop.indexOf("/") + 1
                ),
                state.data.image.desktop.length
              )}`)}
              alt={state.data.slug}
              className="h-[100%] w-[90%] rounded-[8px] xs:w-[100%]"
            />
          </picture>
          {/* Text next/below image of the product */}
          <div
            className={`my-auto w-[90%] md:order-2 md:mx-auto md:my-[auto] md:flex md:w-[80%] md:flex-col sm:mt-[42px] sm:w-[100%] xs:mt-[32px]`}
          >
            {/* New will appear if data.new is true */}
            {state.data.new ? (
              <p className="overline-text mb-[16px] text-D87D4A">NEW PRODUCT</p>
            ) : null}

            {/* Basic information about the product */}
            <p className="heading2 uppercase md:text-[28px] md:leading-[32px] md:tracking-[1px]">
              {state.data.name}
            </p>
            <p className="body mt-[32px] mb-[40px] text-000000/50">
              {state.data.description}
            </p>
            <p className="heading6 mb-[47px]">
              ${state.data.price.toLocaleString("en-US")}
            </p>
            <div className="flex">
              {/* Amount selection of the product to be bought */}
              <div className="mr-[16px] flex w-fit items-center bg-F1F1F1 text-[13px] font-[700] leading-[18px] ">
                <span className="cursor-pointer py-[15px] px-[15px] hover:text-D87D4A">
                  &#8722;
                </span>
                <p className="cursor-pointer py-[15px] px-[21px] tracking-[1px]">
                  1
                </p>
                <span className="cursor-pointer py-[15px] px-[15px] hover:text-D87D4A">
                  &#43;
                </span>
              </div>
              <button className="button-1">SEE PRODUCT</button>
            </div>
          </div>
        </div>
        {/* Features and in the box */}
        <div className="mx-auto flex w-[70%] justify-between xl:w-[80%] lg:w-[90%] md:flex-col">
          <div className="w-[50%] md:w-[100%]">
            <p className="heading3 mb-[32px]">FEATURES</p>
            {/* Split the features text into part by \n */}
            {state.data.features
              .split(/\r?\n/)
              .map((item: any, index: number) => {
                return item.length > 0 ? (
                  <p key={index} className="body text-000000/50">
                    {item}
                  </p>
                ) : (
                  <br key={index} />
                );
              })}
          </div>
          {/* In the Box. Map the includes part of the json */}
          <div className="w-[40%] md:mt-[120px] md:flex md:w-[100%] md:justify-between">
            <p className="heading3 mb-[32px]">IN THE BOX</p>
            <div className="md:w-[50%]">
              {state.data.includes.map((item: any, index: number) => {
                return (
                  <p key={index} className="body mb-[8px] text-000000/50">
                    <span className="mr-[24px] text-D87D4A">
                      {item.quantity}x
                    </span>{" "}
                    {item.item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {/* Gallery images */}
        <div className="mx-auto mt-[160px] grid h-[600px] w-[70%] grid-cols-2 grid-rows-2 gap-y-[20px] gap-x-[18px] xl:w-[80%] lg:w-[90%]">
          {/* First image */}
          <picture className="order-1">
            <source
              media="(max-width: 1024px) and (min-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.first.tablet.substring(
                state.data.gallery.first.tablet.indexOf(
                  "/",
                  state.data.gallery.first.tablet.indexOf("/") + 1
                ),
                state.data.gallery.first.tablet.length
              )}`)}
            />
            <source
              media="(max-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.first.mobile.substring(
                state.data.gallery.first.mobile.indexOf(
                  "/",
                  state.data.gallery.first.mobile.indexOf("/") + 1
                ),
                state.data.gallery.first.mobile.length
              )}`)}
            />
            <img
              src={require(`../assets${state.data.gallery.first.desktop.substring(
                state.data.gallery.first.desktop.indexOf(
                  "/",
                  state.data.gallery.first.desktop.indexOf("/") + 1
                ),
                state.data.gallery.first.desktop.length
              )}`)}
              alt={"first"}
              className="h-[100%] w-[100%]"
            />
          </picture>
          {/* Second image */}
          <picture className="order-3">
            <source
              media="(max-width: 1024px) and (min-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.second.tablet.substring(
                state.data.gallery.second.tablet.indexOf(
                  "/",
                  state.data.gallery.second.tablet.indexOf("/") + 1
                ),
                state.data.gallery.second.tablet.length
              )}`)}
            />
            <source
              media="(max-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.second.mobile.substring(
                state.data.gallery.second.mobile.indexOf(
                  "/",
                  state.data.gallery.second.mobile.indexOf("/") + 1
                ),
                state.data.gallery.second.mobile.length
              )}`)}
            />
            <img
              src={require(`../assets${state.data.gallery.second.desktop.substring(
                state.data.gallery.second.desktop.indexOf(
                  "/",
                  state.data.gallery.second.desktop.indexOf("/") + 1
                ),
                state.data.gallery.second.desktop.length
              )}`)}
              alt={"second"}
              className="h-[100%] w-[100%]"
            />
          </picture>
          {/* Third image */}
          <picture className="order-2 row-span-2">
            <source
              media="(max-width: 1024px) and (min-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.third.tablet.substring(
                state.data.gallery.third.tablet.indexOf(
                  "/",
                  state.data.gallery.third.tablet.indexOf("/") + 1
                ),
                state.data.gallery.third.tablet.length
              )}`)}
            />
            <source
              media="(max-width: 480px)"
              srcSet={require(`../assets${state.data.gallery.third.mobile.substring(
                state.data.gallery.third.mobile.indexOf(
                  "/",
                  state.data.gallery.third.mobile.indexOf("/") + 1
                ),
                state.data.gallery.third.mobile.length
              )}`)}
            />
            <img
              src={require(`../assets${state.data.gallery.third.desktop.substring(
                state.data.gallery.third.desktop.indexOf(
                  "/",
                  state.data.gallery.third.desktop.indexOf("/") + 1
                ),
                state.data.gallery.third.desktop.length
              )}`)}
              alt={"third"}
              className="h-[100%] w-[100%]"
            />
          </picture>
        </div>
        {/* You  Many Also Like */}
        <ShopOptions />
        <BestAudio />
      </div>
    </main>
  );
}
