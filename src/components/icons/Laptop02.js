import * as React from "react";
const SvgLaptop02 = ({ title, titleId, ...props }) => (
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
      d="M21 16V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V16m1.667 4h14.666c.62 0 .93 0 1.185-.068a2 2 0 0 0 1.414-1.414c.068-.255.068-.565.068-1.185 0-.31 0-.465-.034-.592a1 1 0 0 0-.707-.707C21.132 16 20.977 16 20.667 16H3.333c-.31 0-.465 0-.592.034a1 1 0 0 0-.707.707C2 16.868 2 17.023 2 17.333c0 .62 0 .93.068 1.185a2 2 0 0 0 1.414 1.414c.255.068.565.068 1.185.068Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLaptop02;
