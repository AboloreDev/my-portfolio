import { Astronaut } from "@/components/Astronauts";
import Background from "../components/Background";
import Container from "../components/Container";
import HeroText from "../components/HeroText";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <Container>
      <div className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
        <HeroText />
        <Background />
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.23}
                  position={isMobile && [0, -1.5, 0]}
                />
              </Float>
            </Suspense>
          </Canvas>
        </figure>
      </div>
    </Container>
  );
};

export default Hero;
