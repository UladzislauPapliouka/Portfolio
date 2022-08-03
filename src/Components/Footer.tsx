import React, {FC} from "react";
import FooterStyles from "./Footer.module.scss";
import linkedIn from "../assets/SVG/icons8-линкедин.svg";
import gitHub from "../assets/SVG/icons8-github.svg";
import telegram from "../assets/SVG/icons8-телеграмма-app.svg";

export const Footer: FC = () => {
  return (
    <footer className={FooterStyles.footerBlock}>
      <div>
        © 2022 Uladzislau Papliouka. All rights reserved
      </div>
      <div className={FooterStyles.links}>
        <a href="https://www.linkedin.com/in/uladzislaupapliouka/" target={"_blank"} rel="noreferrer"><img src={linkedIn} alt=""/></a>
        <a href="https://github.com/UladzislauPapliouka" target={"_blank"} rel="noreferrer"><img src={gitHub} alt=""/></a>
        <a href="https://t.me/etozhewil" target={"_blank"} rel="noreferrer"><img src={telegram} alt=""/></a>
      </div>
    </footer>
  );
};
