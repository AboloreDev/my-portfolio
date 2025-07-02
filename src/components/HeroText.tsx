import { FlipWords } from "./Flipwords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = [
    "startups",
    "dashboards",
    "portfolios",
    "e-commerce",
    "SaaS products",
  ];
  return (
    <div className="z-10 mt-16 text-center md:mt-32 md:text-left rounded-xl bg-clip-text prata-regular p-4">
      {/* dESKTOP HERO VIEW */}
      <div className="hidden md:flex flex-col space-y-2 ">
        <motion.h1
          className="uppercase font-semibold text-xl "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi I'm Abolore
        </motion.h1>
        <motion.div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="capitalize text-3xl text-neutral-300 hover:text-white font-thin"
          >
            A developer <br />
            Building elegant interfaces for&nbsp;
            {/* Add a flip card */}
            <span className="inline-block text-md text-white border rounded-xl px-2 bg-indigo-950">
              <FlipWords words={words} />
            </span>
            <motion.p>the modern web.</motion.p>
          </motion.div>
        </motion.div>
      </div>
      {/* Mobile hero view */}

      <div className="md:hidden flex flex-col items-center space-y-2 text-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="uppercase font-semibold text-xl"
        >
          Hi, I'm Abolore
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="capitalize text-lg text-neutral-300 hover:text-white font-thin"
        >
          A developer crafting elegant <br />
          experiences for&nbsp;
          <span className="inline-block text-md text-white border rounded-xl px-2 bg-indigo-950">
            <FlipWords words={words} />
          </span>
          <br />
          and meaningful UI.
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
