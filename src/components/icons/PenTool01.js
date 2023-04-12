import * as React from "react";
const SvgPenTool01 = ({ title, titleId, ...props }) => (
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
      d="m18 13-1.3-6.498c-.072-.363-.108-.545-.197-.692a1 1 0 0 0-.312-.325c-.144-.094-.324-.138-.684-.225L2 2m0 0 3.26 13.507c.087.36.13.54.225.684a1 1 0 0 0 .325.312c.147.088.329.125.692.197L13 18M2 2l7.586 7.586m6.545 11.283 4.738-4.738c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822l-.738-.738c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L13.13 17.87c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l.738.738c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668ZM13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPenTool01;
