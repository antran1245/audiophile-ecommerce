import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Features from "./DetailComponents/Features";
import Gallery from "./DetailComponents/Gallery";
import Products from "./DetailComponents/Products";
import BestAudio from "./shared/BestAudio";
import ShopOptions from "./shared/ShopOptions";

export default function Detail() {
  const { state } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({ behavior: "smooth", top: -100 });
  // }, []);
  return (
    <main className="bg-000000 pt-[97px]">
      <div className="bg-FFFFFF">
        <p className="mx-auto w-[70%] pb-[56px] pt-[79px] xl:w-[80%] lg:w-[90%]">
          <span className="cursor-pointer text-000000/50">Go Back</span>
        </p>
        {/* Product detail and image */}
        <Products {...state.data} />
        {/* Features and in the box */}
        <Features {...state.data} />
        {/* Gallery images */}
        <Gallery {...state.data} />
        {/* You  Many Also Like */}
        {/* <section className="mx-auto w-[70%] xl:w-[80%] lg:w-[90%]">
          <p className="heading3">YOU MAY ALSO LIKE</p>
        </section> */}
        <ShopOptions />
        <BestAudio />
      </div>
    </main>
  );
}
