import { ProductInterface } from "../../interfaces/ProductInterface";

export default function Gallery(props: ProductInterface) {
  return (
    <div className="mx-auto mt-[160px] flex h-[100%] w-[70%] justify-evenly xl:w-[80%] lg:w-[90%] sm:flex-col">
      <div className="flex h-[full] flex-col justify-between pr-[30px] sm:pr-0">
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
          />
        </picture>
      </div>
      {/* Third image */}
      <picture>
        <source
          media="(max-width: 1024px) and (min-width: 480px)"
          srcSet={require(`../../assets${props.gallery.third.tablet.substring(
            props.gallery.third.tablet.indexOf(
              "/",
              props.gallery.third.tablet.indexOf("/") + 1
            ),
            props.gallery.third.tablet.length
          )}`)}
        />
        <source
          media="(max-width: 480px)"
          srcSet={require(`../../assets${props.gallery.third.mobile.substring(
            props.gallery.third.mobile.indexOf(
              "/",
              props.gallery.third.mobile.indexOf("/") + 1
            ),
            props.gallery.third.mobile.length
          )}`)}
        />
        <img
          src={require(`../../assets${props.gallery.third.desktop.substring(
            props.gallery.third.desktop.indexOf(
              "/",
              props.gallery.third.desktop.indexOf("/") + 1
            ),
            props.gallery.third.desktop.length
          )}`)}
          alt={"third"}
        />
      </picture>
    </div>
  );
}
