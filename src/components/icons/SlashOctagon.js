import * as React from "react";
const SvgSlashOctagon = ({ title, titleId, ...props }) => (
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
      d="m4.93 4.93 14.14 14.14M2 8.523v6.954c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l4.923 4.922c.173.173.26.26.36.322.09.054.188.095.29.12.115.027.237.027.482.027h6.954c.245 0 .367 0 .482-.028a.998.998 0 0 0 .29-.12c.1-.061.187-.148.36-.32l4.922-4.923c.173-.173.26-.26.322-.36a.998.998 0 0 0 .12-.29c.027-.115.027-.237.027-.482V8.523c0-.245 0-.367-.028-.482a.998.998 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L16.608 2.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C15.844 2 15.722 2 15.477 2H8.523c-.245 0-.367 0-.482.028a1 1 0 0 0-.29.12c-.1.061-.187.148-.36.32L2.47 7.392c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C2 8.156 2 8.278 2 8.523Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSlashOctagon;
