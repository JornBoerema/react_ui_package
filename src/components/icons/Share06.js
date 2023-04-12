import * as React from "react";
const SvgShare06 = ({ title, titleId, ...props }) => (
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
      d="M20.791 12.607c.244-.209.366-.313.411-.438a.5.5 0 0 0 0-.338c-.045-.124-.167-.23-.41-.438L12.32 4.132c-.42-.36-.63-.54-.809-.545a.5.5 0 0 0-.4.184C11 3.91 11 4.186 11 4.74v4.296a9.666 9.666 0 0 0-8 9.516v.612a11.401 11.401 0 0 1 8-4.093v4.19c0 .554 0 .83.112.969a.5.5 0 0 0 .4.184c.178-.005.388-.185.809-.545l8.47-7.26Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgShare06;
