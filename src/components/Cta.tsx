"use client";

import { FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="bg-muted/50 py-16 my-24 sm:my-32"
      ref={ref}
    >
      <motion.div
        className="container lg:grid lg:grid-cols-2 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="lg:col-start-1" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold">
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
        </motion.div>

        <motion.div
          className="space-y-4 lg:col-start-2"
          variants={itemVariants}
        >
          <Button className="w-auto bg-[#5c9612] hover:bg-[#5c9612] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            <FaEnvelope className="mr-2 h-4 w-4" />
            Get in touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
