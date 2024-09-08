import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const craftImages = [
  {
    src: "products/11.jpg",
  },
  {
    src: "products/2.jpg",
  },
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

export default function ProductGallery() {
  return (
    <div className="">
      <Carousel
        images={craftImages}
        canAutoPlay={false}
        isAutoPlaying={false}
        hasMediaButton={false}
        hasSizeButton={false}
        hasIndexBoard={false}
        transitionSpeed={4}
        thumbnailWidth="23%"
        thumbnailHeight="23%"
        // style="{{w-100 md:w-auto}}"
        style={{ height: "80vh" }}
      />
    </div>
  );
}
