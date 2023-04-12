import * as React from "react";
const SvgTranslate02 = ({ title, titleId, ...props }) => (
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
      d="m5 8 5 5m-6 1 6-6 2-3M2 5h12M7 2h1m4.913 15h7.174m-7.174 0L11 21m1.913-4 2.865-5.991c.231-.483.347-.724.505-.8a.5.5 0 0 1 .434 0c.158.076.274.317.505.8L20.087 17m0 0L22 21"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTranslate02;
