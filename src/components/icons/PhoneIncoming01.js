import * as React from "react";
const SvgPhoneIncoming01 = ({ title, titleId, ...props }) => (
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
      d="M15 4v5m0 0h5m-5 0 6-6M10.227 13.863a14.604 14.604 0 0 1-2.847-4.01 1.698 1.698 0 0 1-.113-.266 1.046 1.046 0 0 1 .147-.862c.048-.067.105-.124.22-.238.35-.35.524-.524.638-.7a2 2 0 0 0 0-2.18c-.114-.176-.289-.351-.638-.7l-.195-.196c-.532-.531-.797-.797-1.083-.941a2 2 0 0 0-1.805 0c-.285.144-.551.41-1.083.941l-.157.158c-.53.53-.795.794-.997 1.154-.224.4-.386 1.02-.384 1.479 0 .413.081.695.241 1.26a19.038 19.038 0 0 0 4.874 8.283 19.039 19.039 0 0 0 8.283 4.873c.565.16.847.24 1.26.242a3.377 3.377 0 0 0 1.478-.384c.36-.203.625-.468 1.155-.997l.157-.158c.532-.531.797-.797.942-1.082a2 2 0 0 0 0-1.806c-.145-.285-.41-.55-.942-1.082l-.195-.195c-.35-.35-.524-.524-.7-.639a2 2 0 0 0-2.18 0c-.176.114-.35.29-.7.639-.115.114-.172.171-.239.22-.237.17-.581.228-.862.146a1.695 1.695 0 0 1-.266-.113 14.605 14.605 0 0 1-4.01-2.846Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPhoneIncoming01;
