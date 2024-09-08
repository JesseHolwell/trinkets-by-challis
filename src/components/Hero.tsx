"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaShoppingBag } from "react-icons/fa";

const ETSY_URL = "https://www.etsy.com";
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
        <source src="/products/trinkets-by-challis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
      ></motion.div>

      {/* Overlay content */}
      <div className="container relative z-10 grid lg:grid-cols-2 place-items-center mt-16 py-32 gap-10">
        <div className="text-start space-y-6">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-white -ml-4"
          >
            <h1>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline text-7xl bg-gradient-to-r from-[#fd8712] to-[#d2a679] text-transparent bg-clip-text"
              >
                Trinkets
              </motion.span>
              <br />
            </h1>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="ml-4 text-5xl handwriting"
            >
              by{" "}
              <span className="inline bg-gradient-to-r from-[#F0E68C] via-[#F0E68C] to-[#F0E68C] text-transparent bg-clip-text">
                Challis
              </span>
            </motion.h2>
          </motion.main>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl max-w-2xl text-white"
          >
            I like putting wire on shiny things
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4 w-min"
          >
            <Button className="w-full bg-[#5c9612] hover:bg-[#5c9612] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              <FaEnvelope className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
            <div className="flex justify-center space-x-4">
              <motion.a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-[#F0E68C] text-[#F0E68C] hover:bg-[#F0E68C] hover:text-[#2C3E50] rounded-full transition duration-300 ease-in-out"
                >
                  <FaShoppingBag className="mr-2 h-4 w-4" />
                  Etsy
                </Button>
              </motion.a>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-[#F0E68C] text-[#F0E68C] hover:bg-[#F0E68C] hover:text-[#2C3E50] rounded-full transition duration-300 ease-in-out"
                >
                  <FaInstagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
