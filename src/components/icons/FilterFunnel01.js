import * as React from "react";
const SvgFilterFunnel01 = ({ title, titleId, ...props }) => (
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
      d="M2 4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C2.76 3 3.04 3 3.6 3h16.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C22 3.76 22 4.04 22 4.6v.67c0 .268 0 .403-.033.528-.029.11-.077.215-.141.31-.073.106-.175.194-.378.37l-6.396 5.543c-.203.176-.305.265-.377.371-.065.095-.113.2-.142.31-.033.125-.033.26-.033.529v5.227c0 .196 0 .294-.031.378a.5.5 0 0 1-.133.196c-.066.06-.157.096-.339.17l-3.4 1.36c-.367.146-.551.22-.699.189a.5.5 0 0 1-.315-.213c-.083-.126-.083-.324-.083-.72v-6.587c0-.27 0-.404-.033-.529a1.001 1.001 0 0 0-.141-.31c-.073-.106-.175-.194-.378-.37L2.552 6.478c-.203-.177-.305-.265-.378-.371a1 1 0 0 1-.141-.31C2 5.673 2 5.538 2 5.269V4.6Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilterFunnel01;
