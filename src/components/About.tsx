import { Statistics } from "./Statistics";
import pilot from "../assets/challis.webp";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-r-3xl"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  me
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I'm super cool and I make super cool stuff.
                <br /> Each piece is handcrafted with love and intention. <br />
                Ethically sourced crystals <br />
                Handcrafted with care
                <br /> Infused with positive energy
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
