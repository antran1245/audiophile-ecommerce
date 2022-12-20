import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProps } from "../interfaces/CheckoutInterface";
import ShopContext from "./context/ShopContext";

export default function Cart({ setOpenCart }: CheckoutProps) {
  const context = useContext(ShopContext);
  const { cart, removeAll, removeFromCart, addToCart } = context;
  const navigate = useNavigate();
  const [total, setTotal] = useState<number>(() => {
    return cart.reduce(
      (total, current) => total + current.cartQuantity * current.price,
      0
    );
  });

  return (
    <div>
      <div
        className="absolute z-[3] h-[100%] w-[100%] bg-101010/50"
        onClick={() => setOpenCart(false)}
      ></div>
      <div className="absolute top-[100px] right-[15%] z-[3] w-[25%] max-w-[377px] rounded-[8px] bg-FFFFFF p-[31px] xl:w-[40%] md:w-[50%] sm:right-[50%] sm:w-[90%] sm:translate-x-[50%]">
        {/* Heading */}
        <div className="mb-[32px] flex items-center justify-between">
          <p className="heading6">CART</p>
          <p
            className="body cursor-pointer text-000000/50 underline decoration-000000/50"
            onClick={() => {
              removeAll();
              setTotal(0);
            }}
          >
            Remove all
          </p>
        </div>
        {/* Section for the items */}
        {cart.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-[24px] flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={require(`../assets${item.image.desktop.substring(
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
                  <p className="test-[14px] text-000000/50">${item.price}</p>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex w-fit items-center bg-F1F1F1 text-[13px] font-[700] leading-[18px]">
                <button
                  className={`my-[7px] mx-[11.5px] cursor-pointer hover:text-D87D4A`}
                  onClick={() => {
                    removeFromCart(item.id, 1);
                    setTotal(total - item.price);
                  }}
                >
                  &#8722;
                </button>
                <p className="my-[7px] mx-[12px] cursor-pointer tracking-[1px]">
                  {item.cartQuantity}
                </p>
                <button
                  className="my-[7px] mx-[11.5px] hover:text-D87D4A"
                  onClick={() => {
                    addToCart(item, 1);
                    setTotal(total + item.price);
                  }}
                >
                  &#43;
                </button>
              </div>
            </div>
          );
        })}
        {/* Total cost and checkout button*/}
        <div className="mt-[32px] flex items-center justify-between">
          <p className="body text-000000/50">Total</p>
          <p className="heading6">${total}</p>
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
