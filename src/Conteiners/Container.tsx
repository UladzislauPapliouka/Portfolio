import React, {DOMElement, FC, ReactElement} from "react";
import containerStyles from "./Container.module.scss";
interface Props {
    children?: DOMElement<any, any>[] | ReactElement[] | string[] | number[]
}

export const Container: FC <Props> = ({
  children,
}) => {
  return (
    <div className={containerStyles.Container}>{children}</div>
  );
};
