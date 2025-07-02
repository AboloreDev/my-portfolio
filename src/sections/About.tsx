"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Container from "@/components/Container";
import { Globe } from "@/components/Globe";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const skills = [
  { name: "CSS3", icon: "/assets/logos/css.svg" },
  { name: "JavaScript", icon: "/assets/logos/JavaScript.svg" },
  { name: "TypeScript", icon: "/assets/logos/TypeScript.svg" },
  { name: "React", icon: "/assets/logos/React.svg" },
  { name: "Next.js", icon: " /assets/logos/Next.js (1).svg" },
  {
    name: "Tailwind CSS",
    icon: "/assets/logos/Tailwind CSS.svg",
  },
  { name: "Node.js", icon: "/assets/logos/Node.js.svg" },
  { name: "Express", icon: "/assets/logos/express.svg" },
  { name: "MongoDB", icon: "/assets/logos/MongoDB.svg" },
  { name: "PostgreSQL", icon: "/assets/logos/PostgresSQL.svg" },
  { name: "Git", icon: "/assets/logos/git.svg" },
  { name: "GitHub", icon: "/assets/logos/github.svg" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-20 text-white prata-regular"
    >
      <Container>
        <div className="z-40 px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            // @ts-expect-error none
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold uppercase">
              About Me
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm Abolore, a frontend-focused software engineer passionate about
              crafting performant, accessible, and intuitive web experiences.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I specialize in building modern interfaces using React, Next.js,
              JavaScript, TypeScript, Git, and Tailwind CSS. I have a strong eye
              for design systems, animation, and clean, maintainable code. My
              approach revolves around user-centric design and functional
              elegance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              While my core expertise is frontend development, I'm actively
              expanding into backend technologies including Node.js, Express,
              and REST APIs, aiming to become a robust full-stack developer.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm driven by curiosity and creativity—solving real-world problems
              with well-architected code and thoughtful design. Whether starting
              from scratch or refining existing platforms, I bring a growth
              mindset, ownership, and collaboration to every project.
              <span className="block pt-4">
                <a
                  href="#contact"
                  className="inline-block text-indigo-400 underline underline-offset-4 hover:text-indigo-300 transition-colors duration-300"
                >
                  Want to connect? Let’s build something impactful together.
                </a>
              </span>
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-medium mb-3">Tech Stack</h3>
              <TooltipProvider>
                <motion.div
                  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-4"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {skills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="w-12 h-12 p-2 bg-muted rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                          }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <span>{skill.name}</span>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </motion.div>
              </TooltipProvider>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            // @ts-expect-error none
            variants={imageVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 w-full max-w-md"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/profile-min.jpg"
                alt="Abolore Developer Portrait"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        <figure className="absolute right-[40%] top-[40%] -z-10 w-[300px]">
          <Globe />
        </figure>
      </Container>
    </section>
  );
};

export default AboutSection;
