import Container from "@/components/Container";
import Timeline from "@/components/Timeline";

import { experiences } from "@/constatnts/data";

const Experiences = () => {
  return (
    <div className="w-full p-4">
      <Container>
        <Timeline data={experiences} />
      </Container>
    </div>
  );
};

export default Experiences;
