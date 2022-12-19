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
        <p className="mx-auto w-[70%] pb-[56px] pt-[79px] xl:w-[80%] lg:w-[90%]">
          <span
            className="cursor-pointer text-000000/50"
            onClick={() => navigate(-1)}
          >
            Go Back
          </span>
        </p>
        <div className="mx-auto w-[70%] pb-[141px] xl:w-[80%] lg:w-[90%]">
          <form className="w-[70%] rounded-[8px] bg-FFFFFF p-[48px] md:w-full md:py-[30px] md:px-[27px] sm:p-[24px]">
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
        </div>
      </div>
    </main>
  );
}
