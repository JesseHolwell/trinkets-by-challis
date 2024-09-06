//Carousel.tsx
"use client";
import * as React from "react";
// import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// import { Icon } from "@iconify/react/dist/iconify.js";

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

// Carousel component
export default function Carousel() {
  // State variables
  const [selectedImage, setSelectedImage] = React.useState(staticImages[0]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  // Function to handle next image
  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % staticImages.length;
    setSelectedImage(staticImages[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  // Function to handle previous image
  const handlePrev = () => {
    const prevIndex =
      (selectedImageIndex - 1 + staticImages.length) % staticImages.length;
    setSelectedImage(staticImages[prevIndex]);
    setSelectedImageIndex(prevIndex);
  };

  // Render
  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[40vw]  sm:px-4 mx-auto pt-6">
      {/* Scrollbar title */}
      <span
        className="text-2xl font-medium"
        style={{ color: "var(--foreground)" }}
      >
        {/* Scrollbar */}
      </span>

      <div className="flex p-8 flex flex-col ">
        {/* Image gallery */}
        {staticImages.map((image, index) => (
          <figure className="shrink-0">
            <div
              className="overflow-hidden border shadow-2xl rounded-md mr-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative shadow-lg w-100">
                {/* Image */}
                <img
                  src={image}
                  alt={"Image " + (index + 1)}
                  className="aspect-square object-cover transition-opacity opacity-0 duration-100 cursor-pointer"
                  width="100%"
                  //   height={100}
                  onClick={() => {
                    setSelectedImage(image);
                    setSelectedImageIndex(index);
                  }}
                  onLoad={(event) => {
                    const target = event.target as HTMLImageElement;
                    target.classList.remove("opacity-0");
                  }}
                />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
