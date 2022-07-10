import React, {FC} from "react";
import {Container} from "../Conteiners/Container";
import {TimelineList} from "./TimelineList";
import experienceBlockStyles from "./ExperienceBlock.module.scss";
export const ExperienceBlock: FC = () => {
  const experience =[
    {
      start: "April 2022",
      end: "Present",
      title: "Full-stack Web Trainee – Sheep Apps",
      description: "",
    },
    {
      start: "January 2022",
      end: "April 2022",
      title: "Freelance",
      description: "",
    },
  ];

  const education =[
    {
      start: "2020",
      end: "Present",
      title: "BSUIR student",
      description: "",
    },
    {
      start: "September 2021",
      end: "January 2022",
      title: "IT-INCUBATOR Courses",
      description: "",
    },
  ];
  return (
    <div className={experienceBlockStyles.expBlock}>
      <Container>
        <TimelineList timelineTitle={"Experience"} events={experience}/>
        <TimelineList timelineTitle={"Education"} events={education}/>
      </Container>
    </div>
  );
};
