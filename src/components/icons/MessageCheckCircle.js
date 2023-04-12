import * as React from "react";
const SvgMessageCheckCircle = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m9.5 11.5 2 2L16 9m-3.5 11a8.5 8.5 0 1 0-8.057-5.783c.108.32.162.481.172.604a.899.899 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529c.155-.016.233-.024.303-.021.07.002.12.009.187.024.069.016.155.05.329.116A8.478 8.478 0 0 0 12.5 20Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMessageCheckCircle;
