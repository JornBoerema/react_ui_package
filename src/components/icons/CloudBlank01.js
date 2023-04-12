import * as React from "react";
const SvgCloudBlank01 = ({ title, titleId, ...props }) => (
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
      d="M6.5 19a4.5 4.5 0 0 1-.42-8.98 6.002 6.002 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 19h-11Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCloudBlank01;
