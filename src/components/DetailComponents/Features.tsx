import React from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";

export default function Features(props: ProductInterface) {
  return (
    <div className="mx-auto flex w-[70%] justify-between xl:w-[80%] lg:w-[90%] md:flex-col">
      <div className="w-[50%] md:w-[100%]">
        <p className="heading3 mb-[32px]">FEATURES</p>
        {/* Split the features text into part by \n */}
        {props.features.split(/\r?\n/).map((item: any, index: number) => {
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
      <div className="w-[40%] md:mt-[120px] md:flex md:w-[100%] md:justify-between sm:flex-col">
        <p className="heading3 mb-[32px]">IN THE BOX</p>
        <div className="md:w-[50%]">
          {props.includes.map((item: any, index: number) => {
            return (
              <p key={index} className="body mb-[8px] text-000000/50">
                <span className="mr-[24px] text-D87D4A">{item.quantity}x</span>{" "}
                {item.item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
