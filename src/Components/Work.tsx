import React, {FC} from "react";
import styles from "./Work.module.scss";

interface WorkProps {
  title: string;
}

export const Work: FC<WorkProps> = ({
  title,
}) => {
  return (
    <div className={styles.workElement}>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
          alt="work photo example"/>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <span className={styles.workTitle}>{title}</span>
    </div>
  );
};