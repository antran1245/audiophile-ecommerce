import { ProductInterface } from "../../interfaces/ProductInterface";

export default function Gallery(props: ProductInterface) {
  return (
    <section className="mx-auto my-[160px] flex w-[70%] justify-between xl:w-[80%] lg:w-[90%] md:mt-[153px] md:mb-[120px] sm:mt-[88px] sm:mb-[120px] sm:flex-col">
      <div className="flex w-[40%] flex-col justify-between pr-[30px] sm:w-[100%] sm:pr-0">
        {/* First image */}
        <picture>
          <source
            media="(max-width: 1024px) and (min-width: 480px)"
            srcSet={require(`../../assets${props.gallery.first.tablet.substring(
              props.gallery.first.tablet.indexOf(
                "/",
                props.gallery.first.tablet.indexOf("/") + 1
              ),
              props.gallery.first.tablet.length
            )}`)}
          />
          <source
            media="(max-width: 480px)"
            srcSet={require(`../../assets${props.gallery.first.mobile.substring(
              props.gallery.first.mobile.indexOf(
                "/",
                props.gallery.first.mobile.indexOf("/") + 1
              ),
              props.gallery.first.mobile.length
            )}`)}
          />
          <img
            src={require(`../../assets${props.gallery.first.desktop.substring(
              props.gallery.first.desktop.indexOf(
                "/",
                props.gallery.first.desktop.indexOf("/") + 1
              ),
              props.gallery.first.desktop.length
            )}`)}
            alt={"first"}
            className="w-full rounded-[8px] sm:w-full"
          />
        </picture>
        {/* Second image */}
        <picture>
          <source
            media="(max-width: 1024px) and (min-width: 480px)"
            srcSet={require(`../../assets${props.gallery.second.tablet.substring(
              props.gallery.second.tablet.indexOf(
                "/",
                props.gallery.second.tablet.indexOf("/") + 1
              ),
              props.gallery.second.tablet.length
            )}`)}
          />
          <source
            media="(max-width: 480px)"
            srcSet={require(`../../assets${props.gallery.second.mobile.substring(
              props.gallery.second.mobile.indexOf(
                "/",
                props.gallery.second.mobile.indexOf("/") + 1
              ),
              props.gallery.second.mobile.length
            )}`)}
          />
          <img
            src={require(`../../assets${props.gallery.second.desktop.substring(
              props.gallery.second.desktop.indexOf(
                "/",
                props.gallery.second.desktop.indexOf("/") + 1
              ),
              props.gallery.second.desktop.length
            )}`)}
            alt={"second"}
            className="w-full rounded-[8px] sm:mt-[20px] "
          />
        </picture>
      </div>
      {/* Third image */}
      <picture className="w-[58%] sm:w-[100%]">
        <source
          media="(max-width: 1024px) and (min-width: 480px)"
          srcSet={require(`../../assets${props.gallery.third.tablet.substring(
            props.gallery.third.tablet.indexOf(
              "/",
              props.gallery.third.tablet.indexOf("/") + 2
            ),
            props.gallery.third.tablet.length
          )}`)}
        />
        <source
          media="(max-width: 480px)"
          srcSet={require(`../../assets${props.gallery.third.mobile.substring(
            props.gallery.third.mobile.indexOf(
              "/",
              props.gallery.third.mobile.indexOf("/") + 2
            ),
            props.gallery.third.mobile.length
          )}`)}
        />
        <img
          src={require(`../../assets${props.gallery.third.desktop.substring(
            props.gallery.third.desktop.indexOf(
              "/",
              props.gallery.third.desktop.indexOf("/") + 2
            ),
            props.gallery.third.desktop.length
          )}`)}
          alt={"third"}
          className="h-full w-full rounded-[8px] sm:mt-[20px] "
        />
      </picture>
    </section>
  );
}
