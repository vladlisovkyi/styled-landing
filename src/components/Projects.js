import React from "react";
import Project from "./Project";
import Title from "./Title";

const Projects = () => {
  return (
    <>
      <Title title="about us" />
      <Project>
        <img src="/assets/images/project1.jpg" alt="project" loading="lazy" />
        <p>
          Our company specializes in crafting high-quality furniture pieces that
          reflect both style and functionality. With a strong commitment to
          design and innovation, we create furniture that transforms your living
          spaces into comfortable and elegant environments.
        </p>
      </Project>
      <Project direction={"row"} bg={"#f5ede4"}>
        <img src="/assets/images/project2.jpg" alt="project" loading="lazy" />
        <p>
          Explore our range of furniture collections designed to meet diverse
          needs and preferences. Our pieces are carefully curated to match
          modern trends while ensuring lasting durability and comfort for your
          everyday living.
        </p>
      </Project>
      <Project>
        <img src="/assets/images/project3.jpg" alt="project" loading="lazy" />
        <p>
          At our company, we believe that furniture should enhance the
          aesthetics of your home while serving a functional purpose. Our
          craftsmen work tirelessly to create pieces that merge design
          excellence with practicality, making your living spaces truly
          inviting.
        </p>
      </Project>
    </>
  );
};

export default Projects;
