import * as React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

// Static image paths
const staticImages = [
  "/products/11.jpg",
  "/products/2.jpg",
  "/products/9.jpg",
  "/products/3.jpg",
  "/products/10.jpg",
  "/products/4.jpg",
  "/products/5.jpg",
  "/products/6.webp",
  "/products/7.jpg",
  "/products/8.jpg",
];

const craftImages = [
  // {
  //   src: "1.jpg",
  // },
  {
    src: "products/11.jpg",
  },
  { src: "products/2.jpg" },
  {
    src: "products/3.jpg",
  },
  {
    src: "products/10.jpg",
  },

  {
    src: "products/4.jpg",
  },
  {
    src: "products/6.webp",
  },
  {
    src: "products/5.jpg",
  },
  {
    src: "products/7.jpg",
  },
];

export default function Portfolio() {
  return (
    <div className="">
      <Carousel
        images={craftImages}
        canAutoPlay="false"
        isAutoPlaying="true"
        hasMediaButton="false"
        hasSizeButton="false"
        hasIndexBoard="false"
        transitionSpeed="4"
        thumbnailWidth="23%"
        thumbnailHeight="23%"
        // style="{{w-100 md:w-auto}}"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
