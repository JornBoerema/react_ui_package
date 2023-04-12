import * as React from "react";
const SvgLinkBroken01 = ({ title, titleId, ...props }) => (
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
      d="M9 4V2m6 18v2M4 9H2m18 6h2M4.914 4.914 3.5 3.5m15.586 15.586L20.5 20.5M12 17.657l-2.121 2.121a4 4 0 1 1-5.657-5.657L6.343 12m11.314 0 2.121-2.121a4 4 0 1 0-5.657-5.657L12 6.343"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLinkBroken01;