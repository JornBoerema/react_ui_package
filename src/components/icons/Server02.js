import * as React from "react";
const SvgServer02 = ({ title, titleId, ...props }) => (
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
      d="M6 8h.01M6 16h.01M6 12h12M6 12a4 4 0 0 1 0-8h12a4 4 0 0 1 0 8M6 12a4 4 0 0 0 0 8h12a4 4 0 0 0 0-8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgServer02;
