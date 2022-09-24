import React, {FC} from "react";
import styles from "./WorkExamplesBlock.module.scss";
import {Container} from "../Conteiners/Container";
import {Work} from "./Work";

export const WorkExamplesBlock: FC = () => {
  return (
    <Container>
      <span className={"class-title-span"}>Works</span>
      <div className={styles.worksContainer}>
        <Work title={"asd"}/>
      </div>
    </Container>
  );
};