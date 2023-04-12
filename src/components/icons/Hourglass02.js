import * as React from "react";
const SvgHourglass02 = ({ title, titleId, ...props }) => (
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
      d="M18.163 2H5.837A.837.837 0 0 0 5 2.837a10.05 10.05 0 0 0 2.943 7.106l1.22 1.22c.12.12.181.181.224.24a1 1 0 0 1 0 1.195 2.508 2.508 0 0 1-.224.24l-1.22 1.219A10.05 10.05 0 0 0 5 21.163c0 .462.375.837.837.837h12.326a.837.837 0 0 0 .837-.837 10.05 10.05 0 0 0-2.943-7.106l-1.22-1.22c-.12-.12-.181-.181-.224-.24a1 1 0 0 1 0-1.195c.043-.058.103-.118.224-.24l1.22-1.219A10.05 10.05 0 0 0 19 2.837.837.837 0 0 0 18.163 2Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHourglass02;
