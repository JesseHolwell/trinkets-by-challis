import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaEtsy, FaInstagram, FaEnvelope } from "react-icons/fa";

const ETSY_URL = "etsy.com";
const INSTAGRAM_URL = "instagram.com";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Trinkets
            </span>{" "}
            by
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Challis
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I like putting wire on shiny things
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center flex">
          <Button className="w-full md:w-1/3">
            <FaEnvelope className="mr-2 w-5 h-5" />{" "}
            {/* Icon from react-icons */}
            Get in touch
          </Button>
          {/* <Button className="w-full md:w-1/3">Etsy</Button>
          <Button className="w-full md:w-1/3">Instagram</Button> */}
          {/* Instagram Button */}
          {/* <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          ></a> */}

          {/* Etsy Button */}
          {/* <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
          </a> */}
          <a
            rel="noreferrer noopener"
            href="https://etsy.com"
            target="_blank"
            className={`w-full md:w-1/4 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            {/* <GitHubLogoIcon /> */}
            <FaEtsy className="mr-2 w-5 h-5" /> {/* Icon from react-icons */}
            Etsy
          </a>
          <a
            rel="noreferrer noopener"
            href="https://instagram.com"
            target="_blank"
            className={`w-full md:w-1/4 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            {/* <GitHubLogoIcon /> */}
            <FaInstagram className="mr-2 w-5 h-5" /> Instagram
            {/* Icon from react-icons */}
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      {/* <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
