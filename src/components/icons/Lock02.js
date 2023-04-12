import * as React from "react";
const SvgLock02 = ({ title, titleId, ...props }) => (
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
      d="M17 11V8A5 5 0 0 0 7 8v3m.8 10h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 11 17.88 11 16.2 11H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 13.28 3 14.12 3 15.8v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLock02;