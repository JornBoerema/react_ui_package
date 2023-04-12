import * as React from "react";
const SvgCursorClick01 = ({ title, titleId, ...props }) => (
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
      d="M9 3.5V2M5.06 5.06 4 4m1.06 9L4 14.06m9-9L14.06 4M3.5 9H2m13.864 7.19-2.491 4.627c-.285.529-.427.793-.598.86a.5.5 0 0 1-.451-.044c-.155-.099-.243-.386-.42-.96L8.445 9.445c-.144-.468-.216-.703-.158-.861a.5.5 0 0 1 .297-.297c.158-.058.393.014.861.158l11.228 3.459c.574.177.86.265.96.42a.5.5 0 0 1 .044.45c-.067.172-.331.314-.86.599l-4.627 2.492c-.079.042-.118.063-.153.09a.493.493 0 0 0-.082.082c-.027.035-.048.074-.09.153Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCursorClick01;
