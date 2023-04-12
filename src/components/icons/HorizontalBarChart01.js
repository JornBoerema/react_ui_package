import * as React from "react";
const SvgHorizontalBarChart01 = ({ title, titleId, ...props }) => (
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
      d="M17 9.5V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 4.5 15.96 4.5 15.4 4.5H3m10 10v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20m0-7.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 13.74 21 13.46 21 12.9v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9.5 19.96 9.5 19.4 9.5H3v5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHorizontalBarChart01;
