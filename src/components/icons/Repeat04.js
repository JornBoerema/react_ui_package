import * as React from "react";
const SvgRepeat04 = ({ title, titleId, ...props }) => (
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
      d="M12 20.5a8.5 8.5 0 0 0 5-15.375M13 22.4l-2-2 2-2M12 3.5a8.5 8.5 0 0 0-5 15.375M11 5.6l2-2-2-2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRepeat04;
