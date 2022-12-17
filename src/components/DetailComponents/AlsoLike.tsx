import { ProductInterface } from "../../interfaces/ProductInterface";

export default function AlsoLike(props: ProductInterface) {
  return (
    <section className="mx-auto my-[160px] w-[70%] xl:w-[80%] lg:w-[90%] md:my-[120px]">
      <p className="heading3 text-center">YOU MAY ALSO LIKE</p>
      <div className="mt-[64px] flex justify-between sm:flex-col">
        {props.others.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`flex w-[30%] flex-col items-center xl:w-[31.5%] lg:w-[33%] sm:w-[100%] ${
                index === props.others.length - 1 ? "" : "sm:mb-[56px]"
              }`}
            >
              <picture>
                <source
                  media="(max-width: 1024px) and (min-width: 768px)"
                  srcSet={require(`../../assets${item.image.tablet.substring(
                    item.image.tablet.indexOf(
                      "/",
                      item.image.tablet.indexOf("/") + 2
                    ),
                    item.image.tablet.length
                  )}`)}
                />
                <source
                  media="(max-width: 768px)"
                  srcSet={require(`../../assets${item.image.mobile.substring(
                    item.image.mobile.indexOf(
                      "/",
                      item.image.mobile.indexOf("/") + 2
                    ),
                    item.image.mobile.length
                  )}`)}
                />
                <img
                  src={require(`../../assets${item.image.desktop.substring(
                    item.image.desktop.indexOf(
                      "/",
                      item.image.desktop.indexOf("/") + 2
                    ),
                    item.image.desktop.length
                  )}`)}
                  alt={item.slug}
                  className="rounded-[8px]"
                />
              </picture>
              <p className="heading5 mt-[40px] mb-[32px] uppercase">
                {item.name}
              </p>
              <button className="button-1">SEE PRODUCT</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
