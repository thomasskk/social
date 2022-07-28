import * as React from "react";
import { SVGProps } from "react";

const SvgNsfw = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M917 336 664 83q-45-45-104.5-60.5t-119 0T336 83L83 336q-45 45-60.5 104.5t0 119T83 664l254 253q44 45 103.5 60.5t119 0T664 917l253-253q45-45 60.5-104.5t0-119T917 336zm-44 283L619 873q-33 31-76 42t-86 0-76-42L127 619q-24-23-36.5-54T78 500t12.5-65 36.5-54l254-254q23-24 54-36.5T500 78t65 12.5 54 36.5l254 254q24 23 36.5 54t12.5 65-12.5 65-36.5 54zM221 356v68l84-40v341h71V293h-22zm451 140q22-16 35-40.5t12-51.5q1-32-16.5-59.5T655 303t-64.5-14-64.5 14-47.5 41-16.5 59q-1 28 12 52.5t36 40.5q-32 16-51.5 44.5t-19.5 63 20.5 64T514 713q36 17 77 17t77-17q33-16 54-46 20-29 20-63.5t-19.5-63T672 496zM534 377q9-14 24-22t32.5-8 33 8 24 22.5 8.5 31-9 31-24 23-33 8.5-33-8.5-23-23-8-31.5 8-31zm127 259q-11 16-30 25t-40 9-40-8.5-30-25-11-36 10.5-35.5 29.5-25.5 40.5-9.5 40.5 9.5 30 26 11 35.5-11 35z"
    />
  </svg>
);

export default SvgNsfw;