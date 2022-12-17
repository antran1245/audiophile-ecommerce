import React from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";

export default function Products(props: ProductInterface) {
  return (
    <section className="mx-auto mb-[160px] flex w-[70%] xl:w-[80%] lg:w-[90%] md:mb-[120px] xs:flex-col">
      {/* images in picture tag for responsive image */}
      <picture>
        <source
          media="(max-width: 1024px) and (min-width: 480px)"
          srcSet={require(`../../assets${props.image.tablet.substring(
            props.image.tablet.indexOf(
              "/",
              props.image.tablet.indexOf("/") + 2
            ),
            props.image.tablet.length
          )}`)}
        />
        <source
          media="(max-width: 480px)"
          srcSet={require(`../../assets${props.image.mobile.substring(
            props.image.mobile.indexOf(
              "/",
              props.image.mobile.indexOf("/") + 2
            ),
            props.image.mobile.length
          )}`)}
        />
        <img
          src={require(`../../assets${props.image.desktop.substring(
            props.image.desktop.indexOf(
              "/",
              props.image.desktop.indexOf("/") + 2
            ),
            props.image.desktop.length
          )}`)}
          alt={props.slug}
          className="h-[100%] w-[90%] rounded-[8px] xs:w-[100%]"
        />
      </picture>
      {/* Text next/below image of the product */}
      <div
        className={`my-auto w-[90%] md:order-2 md:mx-auto md:my-[auto] md:flex md:w-[80%] md:flex-col sm:mt-[42px] sm:w-[100%] xs:mt-[32px]`}
      >
        {/* New will appear if data.new is true */}
        {props.new ? (
          <p className="overline-text mb-[16px] text-D87D4A">NEW PRODUCT</p>
        ) : null}

        {/* Basic information about the product */}
        <p className="heading2 uppercase md:text-[28px] md:leading-[32px] md:tracking-[1px]">
          {props.name}
        </p>
        <p className="body mt-[32px] mb-[40px] text-000000/50">
          {props.description}
        </p>
        <p className="heading6 mb-[47px]">
          ${props.price.toLocaleString("en-US")}
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
    </section>
  );
}
