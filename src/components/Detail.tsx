import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlsoLike from "./DetailComponents/AlsoLike";
import Features from "./DetailComponents/Features";
import Gallery from "./DetailComponents/Gallery";
import Products from "./DetailComponents/Products";
import BestAudio from "./shared/BestAudio";
import ShopOptions from "./shared/ShopOptions";

export default function Detail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: -100 });
  }, []);

  return (
    <main className="bg-000000 pt-[94.5px] sm:pt-[90px]">
      <div className="bg-FFFFFF">
        <p className="mx-auto w-[70%] pb-[56px] pt-[79px] xl:w-[80%] lg:w-[90%]">
          <span
            className="cursor-pointer text-000000/50"
            onClick={() => navigate(-1)}
          >
            Go Back
          </span>
        </p>
        {/* Product detail and image */}
        <Products {...state.data} />
        {/* Features and in the box */}
        <Features {...state.data} />
        {/* Gallery images */}
        <Gallery {...state.data} />
        {/* You  Many Also Like */}
        <AlsoLike {...state.data} />
        <ShopOptions />
        <BestAudio />
      </div>
    </main>
  );
}
