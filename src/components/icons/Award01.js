import * as React from "react";
const SvgAward01 = ({ title, titleId, ...props }) => (
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
      d="M7.967 14.722 7 22l4.588-2.753c.15-.09.225-.135.305-.152a.5.5 0 0 1 .214 0c.08.017.155.062.305.152L17 22l-.966-7.279M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAward01;
