import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProps } from "../interfaces/CheckoutInterface";
import Form from "./CheckoutComponents/Form";
import Summary from "./CheckoutComponents/Summary";
import ThankYou from "./CheckoutComponents/ThankYou";
import "../sass/checkout.scss";

export default function Checkout({ setOpenCart }: CheckoutProps) {
  const navigate = useNavigate();
  useEffect(() => {
    setOpenCart(false);
  }, [setOpenCart]);

  return (
    <main className="relative bg-000000 pt-[94.5px] sm:pt-[90px]">
      <ThankYou />
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
          <Form />

          {/* Summary */}
          <Summary />
        </div>
      </div>
    </main>
  );
}
