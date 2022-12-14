import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./context/DataContext";
import { DataInterface } from "../interfaces/DataInterface";
import BestAudio from "./shared/BestAudio";
import ShopOptions from "./shared/ShopOptions";

export default function Category() {
  // Pass information
  const dataContext = useContext(Context);
  const params = useParams();

  // Setting the types of products
  const [typeOfCategory, getType] = useState<string | undefined>("");
  const [products, setProducts] = useState<DataInterface>([]);

  // initial setup of the displaying items based on pass of params
  // params.type be headphones, earphones, speakers
  useEffect(() => {
    getType(params.type);

    // All product with the same params type and is not new then sort in descending order by id
    let dataSet = dataContext
      .filter((item) => item.category === params.type && item.new === false)
      .sort((a, b) => b.id - a.id);

    // All new products with the same params
    let newSet = dataContext.filter(
      (item) => item.category === params.type && item.new === true
    );
    setProducts([...newSet, ...dataSet]);
  }, [params.type, dataContext]);
  return (
    <main>
      <p className="heading2 bg-101010 pt-[195px] pb-[97px] text-center uppercase text-FFFFFF">
        {typeOfCategory}
      </p>
      {products.map((item, index) => {
        return (
          <div
            key={index}
            className="mx-auto my-[160px] flex w-[70%] xl:w-[80%] lg:w-[90%]"
          >
            <picture
              className={`${
                index % 2 !== 0 ? "order-2 flex justify-end" : "order-1"
              }`}
            >
              <source
                media="(max-width: 1024px) and (min-width: 480px)"
                srcSet={require(`../assets${item.categoryImage.tablet.substring(
                  item.categoryImage.tablet.indexOf(
                    "/",
                    item.categoryImage.tablet.indexOf("/") + 1
                  ),
                  item.categoryImage.tablet.length
                )}`)}
              />
              <source
                media="(max-width: 480px)"
                srcSet={require(`../assets${item.categoryImage.mobile.substring(
                  item.categoryImage.mobile.indexOf(
                    "/",
                    item.categoryImage.mobile.indexOf("/") + 1
                  ),
                  item.categoryImage.mobile.length
                )}`)}
              />
              <img
                src={require(`../assets${item.categoryImage.desktop.substring(
                  item.categoryImage.desktop.indexOf(
                    "/",
                    item.categoryImage.desktop.indexOf("/") + 1
                  ),
                  item.categoryImage.desktop.length
                )}`)}
                alt="new headphone"
                className="w-[80%]"
              />
            </picture>
            <div
              className={`my-auto w-[100%] ${
                index % 2 !== 0 ? "order-1" : "order-2"
              }`}
            >
              {item.new ? (
                <p className="overline-text text-D87D4A">NEW PRODUCT</p>
              ) : null}
              <p className="heading2 uppercase">{item.name}</p>
              <p className="body text-000000/50">{item.description}</p>
              <button className="button-1">SEE PRODUCT</button>
            </div>
          </div>
        );
      })}
      <ShopOptions />
      <BestAudio />
    </main>
  );
}
