import * as React from "react";
import { SVGProps } from "react";

const SvgOriginalFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M399 419q-20-12-44-12t-44.5 12.5-32 34T267 500t11.5 47 32 34 44.5 12 44.5-12.5 32-34T443 500t-11.5-46.5T399 419zM500 19q-131 0-243 65-109 64-173 173-65 112-65 243t65 243q64 109 173 173 112 65 243 65t243-65q109-64 173-173 65-112 65-243t-66-243Q852 148 743 85 631 19 500 19zm-12 559q-20 35-56 55t-77.5 20-77.5-20-56.5-56-20.5-77.5 20.5-77 56.5-56 78-20.5 77.5 21 55.5 57 20.5 76.5T488 578zm269 69q-23 7-48 7-43 0-80.5-20T569 578.5t-22-78 22-78.5 59.5-56 79.5-19q24 0 47 6t44 19l-25 58q-12-12-29-17.5t-35-5.5q-25 0-47.5 11.5t-35.5 33-13 47.5 12.5 48 35 34 48.5 12q19 0 36.5-5t28.5-18l25 59q-20 12-43 18z"
    />
  </svg>
);

export default SvgOriginalFill;
