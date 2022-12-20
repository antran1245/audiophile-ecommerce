import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProps } from "../interfaces/CheckoutInterface";
import ShopContext from "./context/ShopContext";

export default function Cart({ setOpenCart }: CheckoutProps) {
  const context = useContext(ShopContext);
  const { cart, removeAll, removeFromCart, addToCart } = context;
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="absolute z-[3] h-[100%] w-[100%] bg-101010/50"
        onClick={() => setOpenCart(false)}
      ></div>
      <div className="absolute top-[100px] right-[15%] z-[3] w-[25%] rounded-[8px] bg-FFFFFF p-[31px] xl:w-[40%] md:right-[50%] md:w-[90%] md:translate-x-[50%]">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <p className="heading6">CART</p>
          <p className="body cursor-pointer text-000000/50 underline decoration-000000/50">
            Remove all
          </p>
        </div>
        {/* Section for the items */}
        {cart.map((item, index) => {
          return <div key={index}></div>;
        })}
        {/* Total cost and checkout button*/}
        <div className="flex items-center justify-between">
          <p className="body text-000000/50">Total</p>
          <p className="heading6">$0</p>
        </div>
        <button
          className="button-1 mt-[24px] w-[100%]"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
