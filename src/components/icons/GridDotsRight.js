import * as React from "react";
const SvgGridDotsRight = ({ title, titleId, ...props }) => (
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
      d="M7.5 3h.01m-.01 9h.01m-.01 9h.01M16.5 3h.01m-.01 9h.01m-.01 9h.01M12 3h.01M12 12h.01M12 21h.01M12 16.5h.01m-.01-9h.01M3 3h.01M3 12h.01M3 21h.01M3 16.5h.01M3 7.5h.01M21 21V3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGridDotsRight;
