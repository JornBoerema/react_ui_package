import * as React from "react";
const SvgCoinsStacked03 = ({ title, titleId, ...props }) => (
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
      d="M13 5c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m11 0v1.5M2 5v12c0 1.105 2.462 2 5.5 2m0-8c-.169 0-.335-.003-.5-.008C4.197 10.9 2 10.043 2 9m5.5 6C4.462 15 2 14.105 2 13m20-1.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0V19c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2v-7.5m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCoinsStacked03;
