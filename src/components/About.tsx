import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePicture from "../assets/challis-forest.jpg";
import sacredArt from "../assets/sacred-art.svg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="container py-24 sm:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-muted/50 border rounded-lg py-12 relative overflow-hidden"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 ">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            src={profilePicture}
            alt=""
            className="w-[300px] object-contain rounded-3xl z-10"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  me
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I'm super cool and I make super cool stuff!
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="list-disc pl-4 pt-2"
                >
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    Each piece is handcrafted with love and intention
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.3, delay: 1 }}
                  >
                    Ethically sourced crystals
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.3, delay: 1.2 }}
                  >
                    Handcrafted with care
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.3, delay: 1.4 }}
                  >
                    Infused with positive energy
                  </motion.li>
                </motion.ul>
              </p>
            </motion.div>
            <div className="sacred-geometry w-[400px]">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: -180 }
                }
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src={sacredArt} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
