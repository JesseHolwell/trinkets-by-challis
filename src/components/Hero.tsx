import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaEtsy, FaInstagram, FaEnvelope, FaShoppingBag } from "react-icons/fa";

const ETSY_URL = "etsy.com";
const INSTAGRAM_URL = "https://www.instagram.com/challis.trinkets/";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="products/trinkets-by-challis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Overlay content */}
      <div className="container relative z-10 grid lg:grid-cols-2 place-items-center mt-16 py-32 gap-10">
        <div className="text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold text-white">
            {" "}
            {/* Soft cream color for text */}
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#fd8712] to-[#d2a679] text-transparent bg-clip-text">
                Trinkets
              </span>{" "}
              by
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#9acd32] via-[#9acd32] to-[#6b8e23] text-transparent bg-clip-text">
                Challis
              </span>{" "}
            </h2>
          </main>

          <p className="text-xl max-w-2xl">
            I like putting wire on shiny things
          </p>

          <div className="space-y-4 w-min">
            <Button className="w-full bg-[#9acd32] hover:bg-[#9acd32] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              <FaEnvelope className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="bg-transparent border-[#F0E68C] text-[#F0E68C] hover:bg-[#F0E68C] hover:text-[#2C3E50] rounded-full transition duration-300 ease-in-out"
              >
                <FaShoppingBag className="mr-2 h-4 w-4" />
                Etsy
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-[#F0E68C] text-[#F0E68C] hover:bg-[#F0E68C] hover:text-[#2C3E50] rounded-full transition duration-300 ease-in-out"
              >
                <FaInstagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>

          {/* <div className=" justify-center flex flex-col">
            <Button className="w-1/3 m-2">
              <FaEnvelope className="mr-2 w-5 h-5" /> Get in touch
            </Button>
            <a
              rel="noreferrer noopener"
              href="https://etsy.com"
              target="_blank"
              className={`w-1/3 m-2 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              <FaEtsy className="mr-2 w-5 h-5" /> Etsy
            </a>
            <a
              rel="noreferrer noopener"
              href="https://instagram.com"
              target="_blank"
              className={`w-1/3 m-2 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              <FaInstagram className="mr-2 w-5 h-5" /> Instagram
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
