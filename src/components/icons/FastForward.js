import * as React from "react";
const SvgFastForward = ({ title, titleId, ...props }) => (
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
      d="M13 16.437c0 1.13 0 1.695.228 1.972a1 1 0 0 0 .81.363c.358-.013.78-.388 1.625-1.14l4.992-4.436c.465-.414.698-.62.783-.865a1 1 0 0 0 0-.662c-.085-.245-.318-.451-.783-.865l-4.992-4.437c-.845-.75-1.267-1.126-1.626-1.14a1 1 0 0 0-.809.364C13 5.868 13 6.433 13 7.563v8.874ZM2 16.437c0 1.13 0 1.695.228 1.972a1 1 0 0 0 .81.363c.358-.013.78-.388 1.625-1.14l4.992-4.436c.465-.414.698-.62.783-.865a1 1 0 0 0 0-.662c-.085-.245-.318-.451-.783-.865L4.663 6.367c-.845-.75-1.267-1.126-1.626-1.14a1 1 0 0 0-.809.364C2 5.868 2 6.433 2 7.563v8.874Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFastForward;
