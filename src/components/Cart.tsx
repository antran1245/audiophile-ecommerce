import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="absolute z-[3] h-[100%] w-[100%] bg-101010/50">
      <div className="absolute top-[3%] right-[15%] w-[25%] rounded-[8px] bg-FFFFFF p-[31px]">
        <div className="flex items-center justify-between">
          <p className="heading6">CART</p>
          <p className="body cursor-pointer text-000000/50 underline decoration-000000/50">
            Remove all
          </p>
        </div>
        {/* Section for the items */}
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
