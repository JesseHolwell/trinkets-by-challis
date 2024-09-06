import { FaEnvelope } from "react-icons/fa";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="contact" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            I also do
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              custom designs{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Ask me about my next market, or if you can't make it let's discuss
            other options
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-auto bg-[#9acd32] hover:bg-[#9acd32] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            <FaEnvelope className="mr-2 h-4 w-4" />
            Get in touch
          </Button>

          {/* <Button className="w-full md:mr-4 md:w-auto">
            <FaEnvelope className="mr-2 w-5 h-5" /> Get in touch
          </Button> */}

          {/* <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};
