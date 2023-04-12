import * as React from "react";
const SvgImageUser = ({ title, titleId, ...props }) => (
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
      d="M4 21.817C4.603 22 5.416 22 6.8 22h10.4c1.384 0 2.197 0 2.8-.183m-16 0a2.18 2.18 0 0 1-.362-.144 3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 4.28 22 5.12 22 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311 2.18 2.18 0 0 1-.362.144m-16 0c0-.809.005-1.237.077-1.597a4 4 0 0 1 3.143-3.143C7.606 17 8.07 17 9 17h6c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.072.36.077.788.077 1.597M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgImageUser;
