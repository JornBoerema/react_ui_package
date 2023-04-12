import * as React from "react";
const SvgPhoneCall02 = ({ title, titleId, ...props }) => (
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
      d="M4.859 6A9.97 9.97 0 0 1 12 3a9.97 9.97 0 0 1 7.142 3m-2.67 3A5.985 5.985 0 0 0 12 7a5.985 5.985 0 0 0-4.472 2M12 17c1.51 0 2.96.258 4.31.731.044.016.067.024.102.04a1.045 1.045 0 0 1 .597.978c0 .233 0 .35.01.448a2 2 0 0 0 1.793 1.793c.098.01.215.01.447.01h.245c.461 0 .691 0 .883-.038a2 2 0 0 0 1.575-1.575c.038-.192.038-.422.038-.883v-.198c0-.475 0-.713-.05-.985-.114-.61-.557-1.363-1.033-1.759-.214-.177-.358-.257-.647-.418A16.924 16.924 0 0 0 12 13c-3.002 0-5.822.778-8.27 2.143-.289.162-.433.242-.647.42-.476.395-.919 1.149-1.032 1.758-.051.272-.051.51-.051.985v.198c0 .461 0 .691.038.883a2 2 0 0 0 1.575 1.575c.192.038.422.038.883.038h.245c.232 0 .349 0 .447-.01a2 2 0 0 0 1.794-1.793c.01-.098.01-.215.01-.448 0-.068 0-.102.002-.14.027-.35.273-.697.594-.839a1.22 1.22 0 0 1 .103-.039A12.98 12.98 0 0 1 12 17Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPhoneCall02;
