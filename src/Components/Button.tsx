import React, {ButtonHTMLAttributes, FC} from "react";
import buttonsStyle from "./Button.module.scss";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) =>{
  return (
    <button className={buttonsStyle.mainButton} {...props}/>
  );
};

