import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../sass/checkout.scss";

interface CheckoutProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}
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
          <form className="w-[70%] rounded-[8px] bg-FFFFFF p-[48px]">
            <p className="heading3 mb-[41px]">CHECKOUT</p>
            {/* 
              Billing Details
            */}
            <p className="subtitle mb-[16px] text-D87D4A">BILLING DETAILS</p>
            <div className="mb-[53px] flex flex-wrap">
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>Email Address</label>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            {/* 
              Shipping info
            */}
            <p className="subtitle mb-[16px] text-D87D4A">SHIPPING INFO</p>
            <div className="form-group mb-[24px] w-[100%]  pr-[16px]">
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="mb-[53px] flex flex-wrap">
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>ZIP Code</label>
                <input type="text" placeholder="ZIP Code" />
              </div>
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>City</label>
                <input type="text" placeholder="City" />
              </div>
              <div className="form-group mr-[16px] mb-[24px] w-[48%]">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
            </div>
            {/* 
              Payment Detail
            */}
            <p className="subtitle mb-[16px] text-D87D4A">PAYMENT DETAILS</p>
            <div className="flex">
              <p className="w-[50%] text-[12px] font-[700] leading-[16px] tracking-[-0.21px]">
                Payment Method
              </p>
              <div className="w-[50%]">
                <div className="form-group-radio flex w-[96%] items-center">
                  <input type="radio" name="payment-option" />
                  <label>e-Money</label>
                </div>
                <div className="form-group-radio flex w-[96%] items-center">
                  <input type="radio" name="payment-option" />
                  <label>Cash on Delivery</label>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="form-group mr-[16px] w-[48%]">
                <label>e-Money Number</label>
                <input type="text" placeholder="e-Money Number" />
              </div>
              <div className="form-group w-[48%]">
                <label>e-Money PIN</label>
                <input type="text" placeholder="PIN Number" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
