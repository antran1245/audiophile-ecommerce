import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BestAudio from "./shared/BestAudio";
import ShopOptions from "./shared/ShopOptions";

export default function Detail() {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: -100 });
  }, []);
  return (
    <main className="bg-000000 pt-[97px]">
      <div className="bg-FFFFFF">
        <p className="mx-auto w-[70%] cursor-pointer pb-[56px] pt-[79px] text-000000/50 xl:w-[80%] lg:w-[90%]">
          Go Back
        </p>
        <div className="mx-auto mb-[160px] flex w-[70%] xl:w-[80%] lg:w-[90%]">
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
              className="h-[100%] w-[80%] rounded-[8px] md:w-[100%]"
            />
          </picture>

          {/* Text next/below image of the product */}
          <div
            className={`my-auto w-[100%] md:order-2 md:mx-auto md:mt-[52px] md:flex md:w-[50%] md:flex-col md:items-center md:text-center sm:mt-[42px] sm:w-[75%] xs:mt-[32px] xs:w-[100%]`}
          >
            {/* New will appear if data.new is true */}
            {state.data.new ? (
              <p className="overline-text mb-[16px] text-D87D4A">NEW PRODUCT</p>
            ) : null}

            {/* Basic information about the product */}
            <p className="heading2 uppercase">{state.data.name}</p>
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
        <div className="mx-auto w-[70%] xl:w-[80%] lg:w-[90%]">
          <div className="w-[60%]">
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
          <div>
            <p className="heading3">IN THE BOX</p>
          </div>
        </div>
        <ShopOptions />
        <BestAudio />
      </div>
    </main>
  );
}
