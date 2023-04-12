import * as React from "react";
const SvgMessageChatSquare = ({ title, titleId, ...props }) => (
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
      d="m10 15-3.075 3.114c-.43.434-.644.651-.828.666a.5.5 0 0 1-.421-.172c-.12-.14-.12-.446-.12-1.056v-1.56c0-.548-.449-.944-.99-1.024v0a3 3 0 0 1-2.534-2.533C2 12.219 2 11.96 2 11.445V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 4.28 19 5.12 19 6.8V11m0 11-2.176-1.513c-.306-.213-.46-.32-.626-.395a2.002 2.002 0 0 0-.462-.145c-.18-.033-.367-.033-.74-.033H13.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C10 18.394 10 17.834 10 16.714V14.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C11.52 11 12.08 11 13.2 11h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 12.52 22 13.08 22 14.2v2.714c0 .932 0 1.398-.152 1.766a2 2 0 0 1-1.083 1.082c-.367.152-.833.152-1.765.152V22Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMessageChatSquare;
