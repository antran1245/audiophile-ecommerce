import React, { useState } from "react";
import cashOnDelivery from "../../assets/checkout/icon-cash-on-delivery.svg";

interface FormObject {
  [key: string]: string;
}
interface FormProps {
  setShowThank: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialInput = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eNumber: "",
  ePIN: "",
};
export default function Form({ setShowThank }: FormProps) {
  const [method, setMethod] = useState<string>("emoney");
  // handle the input
  const [detail, setDetail] = useState<FormObject>(initialInput);

  // handle of errors for all the input
  const [err, setErr] = useState<FormObject>(initialInput);

  /**
   * To check if inputs is correct and/or exist.
   *
   * @param e : event
   * @param key : string
   */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setDetail({ ...detail, [key]: e.target.value });
  };

  /**
   * Submit form then open the Thank Form if there is no error (i.e all key value pair equal ' ')
   *
   * @param e : event
   */
  const submitPayment = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let found = false;
    let re = new RegExp("^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$");
    let currentErr = err;
    for (const key in initialInput) {
      if (detail[key] === "") {
        currentErr = { ...currentErr, [key]: "Required" };
        found = true;
      } else {
        currentErr = { ...currentErr, [key]: "" };
      }
    }
    if (!re.test(detail["email"]) && detail["email"] !== "") {
      currentErr = { ...currentErr, email: "Wrong Format" };
      found = true;
    }
    setErr(currentErr);
    setShowThank(true);
  };

  return (
    <form
      onSubmit={(e) => submitPayment(e)}
      id="checkoutForm"
      className="w-[68%] rounded-[8px] bg-FFFFFF p-[48px] md:w-full md:py-[30px] md:px-[27px] sm:p-[24px]"
    >
      <p className="heading3 mb-[41px]">
        <span className="text-CD2C2C">FAKE STORE</span> CHECKOUT
      </p>
      {/* 
              Billing Details
            */}
      <p className="subtitle mb-[16px] text-D87D4A">BILLING DETAILS</p>
      <div className="mb-[53px] flex flex-col sm:mb-[32px]">
        <div className="flex w-full justify-between sm:flex-col">
          {/* Name */}
          <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
            <label
              className={`${
                err.name !== "" ? "error flex items-center justify-between" : ""
              }`}
            >
              <span>Name</span>
              <span className={`${err.name !== "" ? "" : "hidden"}`}>
                Required
              </span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={detail.name}
              onChange={(e) => handleInput(e, "name")}
              className={`${err.name !== "" ? "error" : ""}`}
            />
          </div>
          {/* Email Address */}
          <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
            <label
              className={`${
                err.email !== ""
                  ? "error flex items-center justify-between"
                  : ""
              }`}
            >
              <span>Email Address</span>
              <span className={`${err.email !== "" ? "" : "hidden"}`}>
                {err.email}
              </span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              value={detail.email}
              onChange={(e) => handleInput(e, "email")}
              className={`${err.email !== "" ? "error" : ""}`}
            />
          </div>
        </div>
        {/* Phone Number */}
        <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
          <label
            className={`${
              err.phone !== "" ? "error flex items-center justify-between" : ""
            }`}
          >
            <span>Phone Number</span>
            <span className={`${err.phone !== "" ? "" : "hidden"}`}>
              Required
            </span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            value={detail.phone}
            onChange={(e) => handleInput(e, "phone")}
            className={`${err.phone !== "" ? "error" : ""}`}
          />
        </div>
      </div>
      {/* 
              Shipping info
            */}
      <p className="subtitle mb-[16px] text-D87D4A">SHIPPING INFO</p>
      {/* Address */}
      <div className="form-group mb-[24px] w-[100%]">
        <label
          className={`${
            err.address !== "" ? "error flex items-center justify-between" : ""
          }`}
        >
          <span>Address</span>
          <span className={`${err.address !== "" ? "" : "hidden"}`}>
            Required
          </span>
        </label>
        <input
          type="text"
          placeholder="Address"
          value={detail.address}
          onChange={(e) => handleInput(e, "address")}
          className={`${err.address !== "" ? "error" : ""}`}
        />
      </div>
      <div className="mb-[53px] flex flex-wrap sm:mb-[32px]">
        <div className="flex w-full justify-between sm:flex-col">
          {/* zip code */}
          <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
            <label
              className={`${
                err.zipCode !== ""
                  ? "error flex items-center justify-between"
                  : ""
              }`}
            >
              <span>ZIP Code</span>
              <span className={`${err.zipCode !== "" ? "" : "hidden"}`}>
                Required
              </span>
            </label>
            <input
              type="text"
              placeholder="ZIP Code"
              value={detail.zipCode}
              onChange={(e) => handleInput(e, "zipCode")}
              className={`${err.zipCode !== "" ? "error" : ""}`}
            />
          </div>

          {/* city */}
          <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
            <label
              className={`${
                err.city !== "" ? "error flex items-center justify-between" : ""
              }`}
            >
              <span>City</span>
              <span className={`${err.city !== "" ? "" : "hidden"}`}>
                Required
              </span>
            </label>
            <input
              type="text"
              placeholder="City"
              value={detail.city}
              onChange={(e) => handleInput(e, "city")}
              className={`${err.city !== "" ? "error" : ""}`}
            />
          </div>
        </div>

        {/* country */}
        <div className={`form-group mb-[24px] w-[49%] sm:w-full`}>
          <label
            className={`${
              err.country !== ""
                ? "error flex items-center justify-between"
                : ""
            }`}
          >
            <span>Country</span>
            <span className={`${err.country !== "" ? "" : "hidden"}`}>
              Required
            </span>
          </label>
          <input
            type="text"
            placeholder="Country"
            value={detail.country}
            onChange={(e) => handleInput(e, "country")}
            className={`${err.country !== "" ? "error" : ""}`}
          />
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
        {/* set money method to e-money */}
        <div className="w-[49%] sm:mt-[17px] sm:w-full">
          <div
            className={`form-group-radio flex w-[100%] cursor-pointer items-center sm:mb-[16px] sm:w-full ${
              method === "emoney" ? "border-D87D4A" : ""
            }`}
            onClick={() => setMethod("emoney")}
          >
            <input
              type="radio"
              name="payment-option"
              value="emoney"
              checked={method === "emoney"}
              onChange={() => setMethod("emoney")}
            />
            <label className="ml-[16px]">e-Money</label>
          </div>

          {/* set money method to cash */}
          <div
            className={`form-group-radio flex w-[100%] cursor-pointer items-center sm:mb-[16px] sm:w-full ${
              method === "cash" ? "border-D87D4A" : ""
            }`}
            onClick={() => setMethod("cash")}
          >
            <input
              type="radio"
              name="payment-option"
              value="cash"
              checked={method === "cash"}
              onChange={() => setMethod("cash")}
            />
            <label className="ml-[16px]">Cash on Delivery</label>
          </div>
        </div>
      </div>

      {/* e-money section */}
      {method === "emoney" ? (
        <div className="mt-[30px] flex justify-between sm:flex-col">
          {/* e-Money Number */}
          <div className="form-group w-[49%] sm:mt-[32px] sm:w-full">
            <label
              className={`sm:mb-[9px] ${
                err.eNumber !== ""
                  ? "error flex items-center justify-between"
                  : ""
              }`}
            >
              <span>e-Money Number</span>
              <span className={`${err.eNumber !== "" ? "" : "hidden"}`}>
                Required
              </span>
            </label>
            <input
              type="text"
              placeholder="e-Money Number"
              value={detail.eNumber}
              onChange={(e) => handleInput(e, "eNumber")}
              className={`${err.eNumber !== "" ? "error" : ""}`}
            />
          </div>
          {/* e-Money PIN */}
          <div className="form-group w-[49%] sm:mt-[24px] sm:w-full">
            <label
              className={`sm:mb-[9px] ${
                err.ePIN !== "" ? "error flex items-center justify-between" : ""
              }`}
            >
              <span>e-Money PIN</span>
              <span className={`${err.ePIN !== "" ? "" : "hidden"}`}>
                Required
              </span>
            </label>
            <input
              type="text"
              placeholder="PIN Number"
              value={detail.ePIN}
              onChange={(e) => handleInput(e, "ePIN")}
              className={`${err.ePIN !== "" ? "error" : ""}`}
            />
          </div>
        </div>
      ) : null}

      {/* cash on delivery */}
      {method === "cash" ? (
        <div className="mt-[30px] flex items-center justify-between">
          <img src={cashOnDelivery} alt="cash on delivery" />
          <p className="body w-[90%] text-000000/50 sm:w-[75%]">
            The &#8216;Cash on Delivery&#8217; option enables you to pay in cash
            when our delivery courier arrives at your residence. Just make sure
            your address is correct so that your order will not be cancelled.
          </p>
        </div>
      ) : null}
    </form>
  );
}
