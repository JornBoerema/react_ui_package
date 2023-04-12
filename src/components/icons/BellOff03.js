import * as React from "react";
const SvgBellOff03 = ({ title, titleId, ...props }) => (
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
      d="M15 19a3 3 0 1 1-6 0M7.377 7.885C6.491 8.813 6 9.985 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.052.244.202.355.132.096.795.096 2.12.096H19.88M12 6c-.293 0-.584.019-.87.055-.382.048-.572.073-.764.02a1.22 1.22 0 0 1-.446-.259c-.14-.14-.17-.215-.232-.363a2.5 2.5 0 1 1 4.108.786A6.852 6.852 0 0 0 12 6Zm0 0c1.591 0 3.117.548 4.243 1.523C17.368 8.498 18 9.821 18 11.2c0 .335.01.656.026.965M21 20 3 4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBellOff03;
