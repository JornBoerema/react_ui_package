import * as React from "react";
const SvgFlag04 = ({ title, titleId, ...props }) => (
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
      d="M14 7h5.64c.448 0 .671 0 .802.094a.5.5 0 0 1 .205.348c.019.16-.09.356-.307.747l-1.346 2.422c-.08.142-.119.213-.134.288a.499.499 0 0 0 0 .202c.015.075.055.146.134.287l1.346 2.424c.217.39.326.586.307.746a.5.5 0 0 1-.205.348c-.13.094-.354.094-.802.094H12.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C11 14.24 11 13.96 11 13.4V11M4 21V4m0 7h8.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 10.24 14 9.96 14 9.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 3 12.96 3 12.4 3H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 3.76 4 4.04 4 4.6V11Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFlag04;
