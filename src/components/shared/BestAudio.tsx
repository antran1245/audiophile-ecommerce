export default function BestAudio() {
    return (
        <section className="my-[200px] flex justify-center md:my-[96px] sm:my-[120px]">
            <div className="flex w-[70%] items-center justify-between xl:w-[80%] lg:w-[90%] md:flex-col">
                <div className="w-[50%] pr-[125px] md:w-[100%] md:order-2 md:mt-[63px] md:text-center md:pr-0 sm:mt-[40px]">
                    <p className="heading2 sm:heading4 md:w-[60%] md:mx-auto sm:w-[90%] test1 sm:test2">
                        BRINGING YOU THE <span className="text-D87D4A">BEST</span> AUDIO
                        GEAR
                    </p>
                    <p className="body mt-[32px] md:w-[80%] md:mx-auto sm:w-[90%]">
                        Located at the heart of New York City, Audiophile is the premier
                        store for high end headphones, earphones, speakers, and audio
                        accessories. We have a large showroom and luxury demonstration rooms
                        available for you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the fantastic people who
                        make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <picture className="w-[49%] md:w-[100%] md:order-1">
                    <source
                        media="(min-width: 480px) and (max-width: 1024px)"
                        srcSet={require("../../assets/shared/tablet/image-best-gear.jpg")}
                    />
                    <source
                        media="(max-width: 480px)"
                        srcSet={require("../../assets/shared/mobile/image-best-gear.jpg")}
                    />
                    <img
                        src={require("../../assets/shared/desktop/image-best-gear.jpg")}
                        alt="best gear"
                        className="rounded-[8px] w-[100%]"
                    />
                </picture>
            </div>
        </section>
    );
}
