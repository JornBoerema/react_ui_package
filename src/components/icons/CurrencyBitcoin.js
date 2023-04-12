import * as React from "react";
const SvgCurrencyBitcoin = ({ title, titleId, ...props }) => (
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
      d="M9.5 2v2m0 16v2m4-20v2m0 16v2m-6-18H14a4 4 0 0 1 0 8H7.5 15a4 4 0 0 1 0 8H7.5m0-16h-2m2 0v16m0 0h-2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCurrencyBitcoin;