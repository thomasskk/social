import * as React from "react";
import { SVGProps } from "react";

const SvgSwapCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M943 186q-19-19-43-29t-50-10H741l-58-80q-8-11-20-17t-26-6H363q-14 0-26 6t-20 17l-58 80H150q-36 0-66 17.5t-47.5 48T19 278v497q0 36 17.5 66T84 888.5t66 17.5h698q36 0 66-17.5t47.5-47.5 18.5-66l1-496q0-27-10-51t-28-42zm-26 589q0 29-20 49t-49 20H150q-28 0-48.5-20.5T81 775V278q0-28 20.5-48.5T150 209h141l75-103h268l75 103h141q29 0 49 20.5t20 48.5zM456 367h21l-63 62 45 45 113-114 22-26-135-136-45 44 63 63h-21q-58 0-107 31.5t-72 85-13.5 111T313 633l46-43q-27-29-33.5-68t9-75 49-58 72.5-22zm185 42q27 30 33.5 69t-9 75-49 58-72.5 22h-21l63-62-45-45-113 114-22 26 135 136 45-44-63-63h21q58 0 107-32t72-85 13-110.5T687 367z"
    />
  </svg>
);

export default SvgSwapCamera;
