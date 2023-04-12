import * as React from "react";
const SvgBrush03 = ({ title, titleId, ...props }) => (
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
      d="M20 10V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.24 2 18.96 2 18.4 2H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 2.76 4 3.04 4 3.6V10m16 0H4m16 0v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 15 16.88 15 15.2 15H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 12.72 4 11.88 4 10.2V10m10.5 5v4.5a2.5 2.5 0 0 1-5 0V15"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBrush03;
