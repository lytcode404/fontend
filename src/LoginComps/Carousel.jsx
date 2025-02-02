import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import Image from "next/image";
const images = [
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
];

const CarouselComp = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Head>
        <style>
          {`
                    .carousel .thumb img {
                        width: 10rem !important;
                        height: 5rem !important;
}

                    .carousel .slide img {
                        max-height: 400px;
                    width: auto;
}`}
        </style>
      </Head>

      <Carousel
        showStatus={true}
        showArrows={true}
        autoPlay={true}
        swipeable={true}
        interval={4000}
        infiniteLoop={true}
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance={true}
        emulateTouch={true}
        dynamicHeight={true}
        thumbWidth={150}
        showThumbs={false}
        centerMode={true}
      >
        {images ? (
          images.map((image, index) => {
            return (
              <div key={index}>
                {" "}
                <Image
                  src={image}
                  width={944}
                  height={944}
                  className="rounded object-cover"
                />
              </div>
            );
          })
        ) : (
          <Image />
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
