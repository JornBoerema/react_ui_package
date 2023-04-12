import * as React from "react";
const SvgMessageHeartCircle = ({ title, titleId, ...props }) => (
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
      d="M21 11.5a8.5 8.5 0 0 1-11.555 7.934c-.174-.066-.26-.1-.33-.116a.901.901 0 0 0-.186-.024 2.314 2.314 0 0 0-.303.021l-5.12.53c-.49.05-.733.075-.877-.013a.5.5 0 0 1-.234-.35c-.026-.166.09-.382.324-.814l1.636-3.027c.134-.25.202-.374.232-.494a.899.899 0 0 0 .028-.326c-.01-.123-.064-.283-.172-.604A8.5 8.5 0 1 1 21 11.5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M12.496 8.95c-.9-1.04-2.4-1.319-3.527-.368-1.127.951-1.286 2.542-.4 3.667.548.697 1.924 1.97 2.893 2.838.355.319.533.478.746.542.183.055.394.055.577 0 .213-.064.39-.223.746-.542.969-.868 2.345-2.14 2.894-2.838a2.606 2.606 0 0 0-.401-3.667c-1.147-.941-2.628-.672-3.528.367Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMessageHeartCircle;
