import * as React from "react";
const SvgUmbrella02 = ({ title, titleId, ...props }) => (
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
      d="M7 19.4C7 20.836 8.12 22 9.5 22s2.5-1.164 2.5-2.6V11m0 0c-1.61 0-4 1-4 1s-1.39-1-3-1-3 1-3 1C2 6.477 6.477 2 12 2s10 4.477 10 10c0 0-1.39-1-3-1s-3 1-3 1-2.39-1-4-1Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgUmbrella02;
