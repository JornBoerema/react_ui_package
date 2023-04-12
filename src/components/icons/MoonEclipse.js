import * as React from "react";
const SvgMoonEclipse = ({ title, titleId, ...props }) => (
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
      d="M20.002 6A10.006 10.006 0 0 1 20 18.002M12 22a9.96 9.96 0 0 0 4.38-1.008 9 9 0 1 1 0-17.984A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMoonEclipse;
