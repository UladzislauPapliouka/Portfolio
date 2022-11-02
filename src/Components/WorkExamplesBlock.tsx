import React, {FC} from "react";
import styles from "./WorkExamplesBlock.module.scss";
import {Container} from "../Conteiners/Container";
import {Work} from "./Work";
import tickTackToe from "../assets/PHOTOS/tic-tac-toe.png";
import colorsClone from "../assets/PHOTOS/colors.png"



export const WorkExamplesBlock: FC = () => {  
  return (
    <Container>
      <span className={"class-title-span"}>Works</span>
      <div className={styles.worksContainer}>
        <Work title={"Tick-tack-toe VueJS"} src={tickTackToe} link={"https://uladzislaupapliouka.github.io/tick-tack-toe-vuejs/"}/>
        <Work title={"Colors Clone"} src={colorsClone} link={"https://uladzislaupapliouka.github.io/color-clone/"}/>
      </div>
    </Container>
  );
};