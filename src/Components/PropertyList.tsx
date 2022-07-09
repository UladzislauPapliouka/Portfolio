import React, {FC} from "react";
import propListStyles from "./PropertyList.module.scss";

interface Props {
  properties: Array<{
    propName: string,
    prop: string | number
  }>
}
export const PropertyList: FC<Props> = ({
  properties,
}) => {
  return (
    <div className={propListStyles.propList}>
      {properties.map((property, i) => {
        return (
          <div key={i}>
            <span>{`${property.propName}: `}</span>
            <span>{property.prop}</span>
          </div>
        );
      })}
    </div>
  );
};
