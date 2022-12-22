import React, { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import checkmark from "../../assets/checkout/icon-order-confirmation.svg";
import "../../sass/checkout.scss";

interface SummaryProps {
  total: number;
  vat: number;
  shipping: number;
  grandTotal: number;
  cart: any[];
  setShowThank: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
}

export default function ThankYou({
  total,
  vat,
  shipping,
  grandTotal,
  cart,
  setShowThank,
  navigate,
}: SummaryProps) {
  const [showRest, setShowRest] = useState<boolean>(false);
  return (
    <div
      id="overlay"
      className="absolute h-full w-full bg-000000/50"
      onClick={(e) => setShowThank(!(e.target === e.currentTarget))}
    >
      <div className="mx-auto mt-[150px] w-full max-w-[540px] rounded-[8px] bg-FFFFFF p-[48px] sm:w-[90%] sm:p-[32px]">
        <img src={checkmark} alt="order confirmation" />
        <p className="heading3 mt-[33px] sm:text-[28px] sm:leading-[28px] sm:tracking-[0.86px]">
          THANK YOU
        </p>
        <p className="heading3 sm:text-[28px] sm:leading-[28px] sm:tracking-[0.86px]">
          FOR YOUR ORDER
        </p>
        <p className="body mt-[24px] mb-[33px] text-000000/50">
          You will receive an email confirmation shortly.
        </p>

        {/* Item listing */}
        {cart.length > 0 ? (
          <div
            className={`flex rounded-[8px] bg-F1F1F1 sm:flex-col ${
              showRest ? "flex-col" : ""
            }`}
          >
            {/* The first item */}
            <div
              className={`p-[24px] sm:w-[100%] ${
                showRest ? "w-[100%]" : "w-[60%]"
              }`}
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={require(`../../assets${cart[0].image.desktop.substring(
                      cart[0].image.desktop.indexOf(
                        "/",
                        cart[0].image.desktop.indexOf("/") + 1
                      ),
                      cart[0].image.desktop.length
                    )}`)}
                    alt={cart[0].slug}
                    className="h-[64px] w-[64px] rounded-[8px]"
                  />
                  <div className="ml-[16px] font-[700] leading-[25px]">
                    <p className="text-[15px]">
                      {cart[0].name.replace(
                        /Wireless|Earphones|Headphones|Speaker/g,
                        ""
                      )}
                    </p>
                    <p className="test-[14px] text-000000/50">
                      ${cart[0].price.toLocaleString("en-US")}
                    </p>
                  </div>
                </div>
                <p className="body font-500 text-000000/50">
                  x{cart[0].cartQuantity}
                </p>
              </div>

              {/* The rest of the item */}
              {showRest
                ? [...cart].splice(1, cart.length).map((item, index) => {
                    return (
                      <div key={index} className="flex justify-between">
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
                        <p className="body font-500 text-000000/50">
                          x{item.cartQuantity}
                        </p>
                      </div>
                    );
                  })
                : null}
              {/* More items? */}
              <div className="border-t-[1px] border-000000/10">
                <button
                  className="mx-auto mt-[16px] w-full text-[12px] font-[700] leading-[16px] tracking-[-0.21px] text-000000/50"
                  onClick={() => setShowRest(!showRest)}
                >
                  {showRest
                    ? "show less"
                    : `and ${cart.length - 1} other item(s)`}
                </button>
              </div>
            </div>

            {/* Grand Total */}
            <div
              className={`flex items-center justify-center rounded-br-[8px] bg-000000 sm:w-[100%] sm:justify-start sm:rounded-tr-[0px] sm:rounded-bl-[8px] sm:py-[24px] sm:pl-[24px] ${
                showRest
                  ? "w-[100%] rounded-bl-[8px] py-[24px]"
                  : "w-[40%] rounded-tr-[8px]"
              }`}
            >
              <div>
                <p className="body text-FFFFFF/50">GRAND TOTAL</p>
                <p className="text-[18px] font-[700] leading-[25px] text-FFFFFF">
                  $5446
                </p>
              </div>
            </div>
          </div>
        ) : null}
        <button
          className="button-1 mt-[46px] w-full text-[13px] font-[700] leading-[18px] tracking-[1px]"
          onClick={() => navigate("/audiophile-ecommerce")}
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
