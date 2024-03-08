import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.spinner}>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.8719 66.5C79.3559 60.3204 82 52.719 82 44.5C82 23.7893 65.2107 7 44.5 7C23.7893 7 7 23.7893 7 44.5C7 65.2107 23.7893 82 44.5 82C54.1044 82 62.8655 78.3893 69.5 72.4513M74.8719 66.5C73.2967 68.6709 71.4944 70.6663 69.5 72.4513M74.8719 66.5L69.5 72.4513"
              stroke="#1C1B1B"
              strokeWidth="14"
            />
            <path
              d="M71.6742 18.6575C78.073 25.3839 82.0003 34.4833 82.0003 44.5C82.0003 55.1036 77.5994 64.6792 70.5244 71.5"
              stroke="url(#paint0_linear_205_17)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_205_17"
                x1="75"
                y1="11"
                x2="66"
                y2="82.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0074E4" />
                <stop offset="1" stopColor="#2B2B2B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
