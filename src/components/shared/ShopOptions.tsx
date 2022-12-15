import React from "react";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import "../../sass/shopoptions.scss";
import { useNavigate } from "react-router-dom";

export default function ShopOptions() {
  const navigate = useNavigate();

  const transferToPage = (page: string) => {
    window.scrollTo({ behavior: "smooth", top: -100 });
    navigate("/Category/" + page);
  };

  return (
    // Shop options
    // Pass Tailwind CSS classes from sass file, home.scss, to elements.
    <section id="shop">
      <div className={`cards-container`}>
        <div className="card" onClick={() => transferToPage("headphones")}>
          <img src={headphones} alt="headphones" />
          <div>
            <p className="nav-title">HEADPHONES</p>
            <p className="button-3">
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
        <div className="card m-auto" onClick={() => transferToPage("speakers")}>
          <img src={speakers} alt="speakers" />
          <div>
            <p className="nav-title">SPEAKERS</p>
            <p className="button-3">
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
        <div className="card" onClick={() => transferToPage("earphones")}>
          <img src={earphones} alt="earphones" />
          <div>
            <p className="nav-title">EARPHONES</p>
            <p className="button-3">
              SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
