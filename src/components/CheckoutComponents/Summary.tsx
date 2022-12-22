import React, { SetStateAction } from "react";
interface SummaryProps {
  total: number;
  vat: number;
  shipping: number;
  grandTotal: number;
  cart: any[];
}

export default function Summary({
  total,
  vat,
  shipping,
  grandTotal,
  cart,
}: SummaryProps) {
  return (
    <div className="h-fit w-[30%] rounded-[8px] bg-FFFFFF py-[32px] px-[33px] md:mt-[32px] md:w-full">
      <p className="heading6 mb-[31px]">SUMMARY</p>
      {/* Put the items here */}
      {cart.map((item, index) => {
        return (
          <div
            key={index}
            className="mb-[24px] flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={require(`../../assets${item.image.desktop.substring(
                  item.image.desktop.indexOf(
                    "/",
                    item.image.desktop.indexOf("/") + 1
                  ),
                  item.image.desktop.length
                )}`)}
                alt={item.slug}
                className="h-[64px] w-[64px] rounded-[8px]"
              />
              <div className="ml-[16px] font-[700] leading-[25px]">
                <p className="text-[15px]">
                  {item.name.replace(
                    /Wireless|Earphones|Headphones|Speaker/g,
                    ""
                  )}
                </p>
                <p className="test-[14px] text-000000/50">
                  ${item.price.toLocaleString("en-US")}
                </p>
              </div>
            </div>
            <p className="body font-500 text-000000/50">x{item.cartQuantity}</p>
          </div>
        );
      })}
      <div className="mb-[8px] mt-[32px] flex items-center justify-between">
        <p className="body text-000000/50">TOTAL</p>
        <p className="text-[18px] font-[700] leading-[25px] text-000000">
          ${total.toLocaleString("en-US")}
        </p>
      </div>
      <div className="mb-[8px] flex items-center justify-between">
        <p className="body text-000000/50">SHIPPING</p>
        <p className="text-[18px] font-[700] leading-[25px] text-000000">
          ${shipping}
        </p>
      </div>
      <div className="mb-[24px] flex items-center justify-between">
        <p className="body text-000000/50">VAT &#x28;INCLUDED&#x29;</p>
        <p className="text-[18px] font-[700] leading-[25px] text-000000">
          ${vat.toLocaleString("en-US")}
        </p>
      </div>
      <div className="mb-[32px] flex items-center justify-between">
        <p className="body text-000000/50">GRAND TOTAL</p>
        <p className="text-[18px] font-[700] leading-[25px] text-000000">
          ${grandTotal.toLocaleString("en-US")}
        </p>
      </div>
      <button
        className="button-1 w-full text-[13px] font-[700] leading-[18px] tracking-[1px]"
        form="checkoutForm"
      >
        CONTINUE & PAY
      </button>
      <p className="text-[12px] text-000000/50">
        Beta Version. Thank You Overlay will show with blank form or not.
      </p>
    </div>
  );
}
