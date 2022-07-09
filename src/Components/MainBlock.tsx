import React, {FC} from "react";
import mainLBlockStyles from "./MainBlock.module.scss";
import {Container} from "../Conteiners/Container";
import ReactTypingEffect from "react-typing-effect";
import mouseSVG from "./../assets/SVG/mouse.svg";
export const MainBlock: FC = () => {
  const textArray = [
    "Front-End Developer.",
    "Based in Minsk",
  ];
  return (
    <div className={mainLBlockStyles.mainBlock}>
      <Container>
        <span className={mainLBlockStyles.nameSpan}>
          {"I'm Uladzislau Papliouka"}
        </span>
        <ReactTypingEffect
          className={mainLBlockStyles.typingSpan}
          text={textArray}
          speed={50}
          eraseSpeed={50}
          typingDelay={100}
          eraseDelay={100}
        />
        <img src={mouseSVG}/>
      </Container>
    </div>
  );
};
