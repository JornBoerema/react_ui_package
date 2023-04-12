import * as React from "react";
const SvgPaperclip = ({ title, titleId, ...props }) => (
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
      d="m21.152 10.9-9.015 9.015a5.25 5.25 0 0 1-7.425-7.425l9.016-9.015a3.5 3.5 0 1 1 4.95 4.95l-8.662 8.662a1.75 1.75 0 1 1-2.475-2.475l7.601-7.602"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPaperclip;