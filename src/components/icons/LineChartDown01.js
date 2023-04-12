import * as React from "react";
const SvgLineChartDown01 = ({ title, titleId, ...props }) => (
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
      d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m17 12-3.919-4.183c-.148-.158-.223-.237-.312-.278a.5.5 0 0 0-.253-.044c-.098.01-.194.06-.387.16l-3.258 1.69c-.193.1-.289.15-.387.16a.5.5 0 0 1-.253-.044c-.09-.04-.164-.12-.312-.278L7 8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLineChartDown01;
