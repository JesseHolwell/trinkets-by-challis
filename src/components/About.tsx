import { Statistics } from "./Statistics";
import profilePicture from "../assets/challis-forest.jpg";
import sacred from "../assets/1303400492.svg";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 relative overflow-hidden">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 ">
          <img
            src={profilePicture}
            alt=""
            className="w-[300px] object-contain rounded-3xl z-10"
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
                I'm super cool and I make super cool stuff!
                <ul className="list-disc pl-4 pt-2">
                  <li>Each piece is handcrafted with love and intention</li>
                  <li>Ethically sourced crystals</li>
                  <li>Handcrafted with care</li>
                  <li>Infused with positive energy</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="sacred-geometry w-[400px]">
            <img src={sacred} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
