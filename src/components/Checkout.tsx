import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProps } from "../interfaces/CheckoutInterface";
import "../sass/checkout.scss";

export default function Checkout({ setOpenCart }: CheckoutProps) {
  const navigate = useNavigate();
  useEffect(() => {
    setOpenCart(false);
  }, [setOpenCart]);

  return (
    <main className="bg-000000 pt-[94.5px] sm:pt-[90px]">
      <div className="bg-[#F2F2F2]">
        <p className="mx-auto w-[80%] pb-[56px] pt-[79px] xl:w-[80%] lg:w-[90%]">
          <span
            className="cursor-pointer text-000000/50"
            onClick={() => navigate(-1)}
          >
            Go Back
          </span>
        </p>
        <div className="mx-auto flex w-[80%] justify-between pb-[141px] xl:w-[80%] lg:w-[90%] md:flex-col">
          {/* Billing, Shipping, Payment form */}
          <form className="w-[68%] rounded-[8px] bg-FFFFFF p-[48px] md:w-full md:py-[30px] md:px-[27px] sm:p-[24px]">
            <p className="heading3 mb-[41px]">CHECKOUT</p>
            {/* 
              Billing Details
            */}
            <p className="subtitle mb-[16px] text-D87D4A">BILLING DETAILS</p>
            <div className="mb-[53px] flex flex-col sm:mb-[32px]">
              <div className="flex w-full justify-between sm:flex-col">
                <div className="form-group mb-[24px] w-[49%] sm:w-full">
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group mb-[24px] w-[49%] sm:w-full">
                  <label>Email Address</label>
                  <input type="text" placeholder="Email Address" />
                </div>
              </div>
              <div className="form-group mb-[24px] w-[49%] sm:w-full">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            {/* 
              Shipping info
            */}
            <p className="subtitle mb-[16px] text-D87D4A">SHIPPING INFO</p>
            <div className="form-group mb-[24px] w-[100%]">
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="mb-[53px] flex flex-wrap sm:mb-[32px]">
              <div className="flex w-full justify-between sm:flex-col">
                <div className="form-group mb-[24px] w-[49%] sm:w-full">
                  <label>ZIP Code</label>
                  <input type="text" placeholder="ZIP Code" />
                </div>
                <div className="form-group mb-[24px] w-[49%] sm:w-full">
                  <label>City</label>
                  <input type="text" placeholder="City" />
                </div>
              </div>
              <div className="form-group mb-[24px] w-[49%] sm:w-full">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
            </div>
            {/* 
              Payment Detail
            */}
            <p className="subtitle mb-[16px] text-D87D4A">PAYMENT DETAILS</p>
            <div className="flex justify-between sm:flex-col">
              <p className="w-[49%] text-[12px] font-[700] leading-[16px] tracking-[-0.21px]">
                Payment Method
              </p>
              <div className="w-[49%] sm:mt-[17px] sm:w-full">
                <div className="form-group-radio flex w-[100%] items-center sm:mb-[16px] sm:w-full">
                  <input type="radio" name="payment-option" />
                  <label className="ml-[16px]">e-Money</label>
                </div>
                <div className="form-group-radio flex w-[100%] items-center sm:w-full">
                  <input type="radio" name="payment-option" />
                  <label className="ml-[16px]">Cash on Delivery</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between sm:flex-col">
              <div className="form-group w-[49%] sm:mt-[32px] sm:w-full">
                <label className="sm:mb-[9px]">e-Money Number</label>
                <input type="text" placeholder="e-Money Number" />
              </div>
              <div className="form-group w-[49%] sm:mt-[24px] sm:w-full">
                <label className="sm:mb-[9px]">e-Money PIN</label>
                <input type="text" placeholder="PIN Number" />
              </div>
            </div>
          </form>

          {/* Summary */}
          <div className="h-fit w-[30%] rounded-[8px] bg-FFFFFF py-[32px] px-[33px] md:mt-[32px] md:w-full">
            <p className="heading6">SUMMARY</p>
            {/* Put the items here */}
            <div className="mb-[8px] flex items-center justify-between">
              <p className="body text-000000/50">TOTAL</p>
              <p className="text-[18px] font-[700] leading-[25px] text-000000">
                $0
              </p>
            </div>
            <div className="mb-[8px] flex items-center justify-between">
              <p className="body text-000000/50">SHIPPING</p>
              <p className="text-[18px] font-[700] leading-[25px] text-000000">
                $0
              </p>
            </div>
            <div className="mb-[24px] flex items-center justify-between">
              <p className="body text-000000/50">VAT &#x28;INCLUDED&#x29;</p>
              <p className="text-[18px] font-[700] leading-[25px] text-000000">
                $0
              </p>
            </div>
            <div className="mb-[32px] flex items-center justify-between">
              <p className="body text-000000/50">GRAND TOTAL</p>
              <p className="text-[18px] font-[700] leading-[25px] text-000000">
                $0
              </p>
            </div>
            <button className="button-1 w-full text-[13px] font-[700] leading-[18px] tracking-[1px]">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
