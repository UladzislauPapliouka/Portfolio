import React, {FC} from "react";
import informationBlockStyles from "./InformationBlock.module.scss";
import {Container} from "../Conteiners/Container";
import photo from "./../assets/PHOTOS/Untitled-1.png";
import {PropertyList} from "./PropertyList";
export const InformationBlock: FC = () => {
  const properties = [
    {
      prop: "25",
      propName: "Age",
    },
    {
      prop: "Belarus",
      propName: "Residence",
    },
    {
      prop: "Available",
      propName: "Freelance",
    },
    {
      propName: "Address",
      prop: "Minsk, Belarus",
    },
    {
      propName: "E-mail",
      prop: "uladzislau.papliouka@gmail.com",
    },
  ];
  return (
    <div className={informationBlockStyles.infoBlock}>
      <Container>
        <div className={informationBlockStyles.about}>
          <span className={"class-title-span"}>About information</span>
          <div className={informationBlockStyles.dataBlock}>
            <img src={photo} alt=""/>
            <div className={informationBlockStyles.description}>
              <span>{
                "Hello! I’m John Doe. Web designer from USA," +
                " California, San Francisco. I have rich experience" +
                " in web site design and building, also I am good at" +
                " wordpress. I love to talk with you about our unique."
              }</span>
              <PropertyList properties={properties}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
