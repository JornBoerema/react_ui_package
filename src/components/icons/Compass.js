import * as React from "react";
const SvgCompass = ({ title, titleId, ...props }) => (
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
      d="M12 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V2m9 12.938A11.971 11.971 0 0 1 12 19a11.971 11.971 0 0 1-9-4.063m7.745-6.275L3 22M13.255 8.662 21 22"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCompass;
