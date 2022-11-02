import React, {FC} from "react";
import styles from "./WorkExamplesBlock.module.scss";
import {Container} from "../Conteiners/Container";
import {Work} from "./Work";
import tickTackToe from "../assets/PHOTOS/tic-tac-toe.png";
import colorsClone from "../assets/PHOTOS/colors.png"
import colorsPanel from "../assets/PHOTOS/colorPanel.png"
import Slider from "../assets/PHOTOS/slider.png"
import ExpandingCards from "../assets/PHOTOS/expandingsCard.png"


export const WorkExamplesBlock: FC = () => {  
  return (
    <Container>
      <span className={"class-title-span"}>Works</span>
      <div className={styles.worksContainer}>
        <Work title={"Tick-tack-toe VueJS"} src={tickTackToe} link={"https://uladzislaupapliouka.github.io/tick-tack-toe-vuejs/"}/>
        <Work title={"Colors Clone"} src={colorsClone} link={"https://uladzislaupapliouka.github.io/color-clone/"}/>
        <Work title={"Color Panel"} src={colorsPanel} link={"https://uladzislaupapliouka.github.io/color-board/"}/>
        <Work title={"Slider"} src={Slider} link={"https://uladzislaupapliouka.github.io/slider/"}/>
        <Work title={"Expending Cards"} src={ExpandingCards} link={"https://uladzislaupapliouka.github.io/expanding-cards/"}/>
      </div>
    </Container>
  );
};