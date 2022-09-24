import React, {FC} from "react";
import styles from "./Work.module.scss";

interface WorkProps {
  title: string;
  src: string;
  link: string;
}

export const Work: FC<WorkProps> = ({
  title,
  src,
  link,
}) => {
  return (
    <div className={styles.workElement}>
      <div className={styles.image}>
        <img
          src={src}
          alt="work photo example"/>
        <button onClick={() => {
          window.open(link, "_blank");
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <span className={styles.workTitle}>{title}</span>
    </div>
  )
    ;
};