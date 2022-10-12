import React, {FC} from "react";
import skillsBlockStyles from "./SkillsBlock.module.scss";
import {Container} from "../Conteiners/Container";
import {Skill} from "./Skill";

export const SkillsBlock: FC = () => {
  return (
    <div className={skillsBlockStyles.skillsBlock}>
      <Container>
        <span className="class-title-span">Skills</span>
        <div className={skillsBlockStyles.skillsContainer}>
          <Skill skillName={"HTML / CSS"}/>
          <Skill skillName={"JS / TS"}/>
          <Skill skillName={"CSS / SASS"}/>
          <Skill skillName={"React / Redux"}/>
          <Skill skillName={"MaterialUI"}/>
          <Skill skillName={"VueJS"}/>
          <Skill skillName={"RestAPI"}/>
          <Skill skillName={"GIT"}/>
        </div>
      </Container>
    </div>
  );
};
