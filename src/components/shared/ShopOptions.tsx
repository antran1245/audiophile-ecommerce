import React from "react";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import '../../sass/shopoptions.scss'

export default function ShopOptions() {
    return(
        // Shop options
        // Pass Tailwind CSS classes from sass file, home.scss, to elements.
        <section id="shop">
            <div className={`cards-container`}>
                <div className="card">
                <img src={headphones} alt="headphones" />
                <div>
                    <p className="nav-title">HEADPHONES</p>
                    <p className="button-3">
                    SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
                    </p>
                </div>
                </div>
                <div className="card m-auto">
                <img src={speakers} alt="speakers" />
                <div>
                    <p className="nav-title">SPEAKERS</p>
                    <p className="button-3">
                    SHOP <img src={arrow} alt="arrow" className="ml-[13px]" />
                    </p>
                </div>
                </div>
                <div className="card">
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
    )
}