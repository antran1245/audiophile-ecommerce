import checkmark from "../../assets/checkout/icon-order-confirmation.svg";
import "../../sass/checkout.scss";

export default function ThankYou() {
  return (
    <div className="absolute h-full w-full bg-000000/50">
      <div className="mx-auto mt-[150px] w-full max-w-[540px] rounded-[8px] bg-FFFFFF p-[48px] sm:w-[90%]">
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
        <button className="button-1 w-full text-[13px] font-[700] leading-[18px] tracking-[1px]">
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
