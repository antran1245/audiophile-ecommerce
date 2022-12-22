import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProps } from "../interfaces/CheckoutInterface";
import Form from "./CheckoutComponents/Form";
import Summary from "./CheckoutComponents/Summary";
import ThankYou from "./CheckoutComponents/ThankYou";
import ShopContext from "./context/ShopContext";
import "../sass/checkout.scss";

export default function Checkout({ setOpenCart }: CheckoutProps) {
  const navigate = useNavigate();
  const [showThank, setShowThank] = useState<boolean>(false);
  const context = useContext(ShopContext);
  const { cart } = context;

  const total = cart.reduce(
    (total, current) => total + current.cartQuantity * current.price,
    0
  );
  const shipping = cart.length > 0 ? 50 : 0;
  const vat = Math.floor(total * 0.2);
  const grandTotal =
    total + Math.floor(total * 0.2) + (cart.length > 0 ? 50 : 0);

  useEffect(() => {
    setOpenCart(false);
  }, [setOpenCart]);

  return (
    <main className="relative bg-000000 pt-[94.5px] sm:pt-[90px]">
      {showThank ? (
        <ThankYou
          total={total}
          shipping={shipping}
          vat={vat}
          grandTotal={grandTotal}
          cart={cart}
          setShowThank={setShowThank}
          navigate={navigate}
        />
      ) : null}
      <div className="bg-[#F2F2F2]">
        <p className="mx-auto w-[80%] pb-[56px] pt-[79px] xl:w-[80%] lg:w-[90%]">
          <span
            className="cursor-pointer text-000000/50 hover:text-D87D4A"
            onClick={() => navigate(-1)}
          >
            Go Back
          </span>
        </p>
        <div className="mx-auto flex w-[80%] justify-between pb-[141px] xl:w-[80%] lg:w-[90%] md:flex-col">
          {/* Billing, Shipping, Payment form */}
          <Form setShowThank={setShowThank} />

          {/* Summary */}
          <Summary
            total={total}
            shipping={shipping}
            vat={vat}
            grandTotal={grandTotal}
            cart={cart}
          />
        </div>
      </div>
    </main>
  );
}
