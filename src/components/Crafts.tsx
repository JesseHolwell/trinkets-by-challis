"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductGallery from "./ProductGallery";

const Crafts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const portfolioRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      id="gallery"
      className="container text-center py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        ref={titleRef}
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Some of my{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          crafts{" "}
        </span>
      </motion.h2>
      <motion.p
        ref={descriptionRef}
        className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        They're almost as beautiful as me
      </motion.p>

      <motion.div
        ref={portfolioRef}
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={portfolioInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <ProductGallery />
      </motion.div>
    </motion.section>
  );
};

export default Crafts;
