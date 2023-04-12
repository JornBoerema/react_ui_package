import * as React from "react";
const SvgCopy01 = ({ title, titleId, ...props }) => (
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
      d="M5 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2H12c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 3.602 15 4.068 15 5m-2.8 17h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-6.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 9 19.92 9 18.8 9h-6.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C9 10.52 9 11.08 9 12.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C10.52 22 11.08 22 12.2 22Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCopy01;
