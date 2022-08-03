import React, {FC} from "react";
import skillStyles from "./Skill.module.scss";

interface Props {
  skillName: string
}

export const Skill: FC<Props> = ({
  skillName,
}) => {
  return (
    <div className={skillStyles.skillBlock}>
      <span className={skillStyles.skillName}>{skillName}</span>
    </div>
  );
};
