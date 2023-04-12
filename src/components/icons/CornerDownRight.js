import * as React from "react";
const SvgCornerDownRight = ({ title, titleId, ...props }) => (
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
      d="M4 4v1.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C8.56 15 10.24 15 13.6 15H20m0 0-5-5m5 5-5 5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCornerDownRight;