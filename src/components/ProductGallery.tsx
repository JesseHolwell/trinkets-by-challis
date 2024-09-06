import { useState, useEffect } from "react";
// import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "./Portfolio";
import Portfolio from "./Portfolio";

interface CraftProps {
  name: string;
  src: string;
}

const craftImages = [
  // {
  //   src: "1.jpg",
  // },
  {
    src: "11.jpg",
  },
  { src: "2.jpg" },
  {
    src: "9.jpg",
  },
  {
    src: "3.jpg",
  },
  {
    src: "10.jpg",
  },

  {
    src: "4.jpg",
  },
  {
    src: "5.jpg",
  },
  {
    src: "6.webp",
  },
  {
    src: "7.jpg",
  },
  {
    src: "8.jpg",
  },
];

const ProductGallery = () => {
  const [crafts, setCrafts] = useState<CraftProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // In a real application, this would be replaced with an API call or import
    const fetchCrafts = async () => {
      // Simulating fetching images from src/assets/products
      const images = craftImages.map((x) => ({
        name: "removeme",
        src: "products/" + x.src,
      }));
      setCrafts(images);
    };
    fetchCrafts();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (crafts.length - 3));
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (crafts.length - 3)) % (crafts.length - 3)
    );
  };

  return (
    <section id="gallery" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Some of my{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          crafts{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        They're almost as beautiful as me
      </p>

      <div className="relative max-w-6xl mx-auto">
        <Portfolio />

        {/* <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {crafts.map((craft, index) => (
              <Card
                key={index}
                className="bg-muted/50 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4"
              >
                <img
                  src={craft.src}
                  alt={craft.name}
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </Card>
            ))}
          </div> */}
        {/* <Button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2"
          variant="outline"
          size="icon"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2"
          variant="outline"
          size="icon"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </Button> */}
      </div>
    </section>
  );
};

export default ProductGallery;
