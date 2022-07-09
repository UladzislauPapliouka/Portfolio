import React, {FC, ReactElement} from "react";
import containerStyles from "./Container.module.scss";
interface Props {
    children?: ReactElement[] | ReactElement
}

export const Container: FC <Props> = ({
  children,
}) => {
  return (
    <div className={containerStyles.Container}>{children}</div>
  );
};
