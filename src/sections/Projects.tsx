import Container from "@/components/Container";
import Project from "@/components/Project";
import { projects } from "@/constatnts/data";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section className="relative p-4" onMouseMove={handleMouseMove}>
      <Container>
        <h2 className="prata-regular text-2xl">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-1 w-full" />
        {projects.map((project) => (
          // @ts-expect-error no error
          <Project project={project} key={project.id} setPreview={setPreview} />
        ))}
        {preview && (
          <motion.img
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )}
      </Container>
    </section>
  );
};

export default Projects;
