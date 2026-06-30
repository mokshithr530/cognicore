"use client";

import { motion } from "framer-motion";

export default function Typewriter({ text }: { text: string }) {

  const letters = text.split("");

  return (

    <motion.p
      className="text-gray-400 text-lg leading-loose max-w-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.02
          }
        }
      }}
    >

      {letters.map((letter, index) => (

        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {letter}
        </motion.span>

      ))}

    </motion.p>

  );
}