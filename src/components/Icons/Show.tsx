import * as React from "react";
import { SVGProps } from "react";

const SvgShow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1018 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 269q-63 0-116 31t-84 84-31 116 31 116 84 84 116 31 116-31 84-84 31-116-31-116-84-84-116-31zm0 400q-46 0-84.5-23T354 584.5 331 500t23-84.5 61.5-61.5 84.5-23 84.5 23 61.5 61.5 23 84.5-23 84.5-61.5 61.5-84.5 23zm493-190q-40-100-114.5-176T706 185.5 500 144t-206 41.5T121.5 303 7 479q-9 21 0 42 41 104 121 183 98 96 229 133 128 35 258 7 133-30 236-121 95-84 142-202 9-21 0-42zM809 677q-90 80-208 106-114 25-227-6-116-33-202-118-69-68-107-157 35-88 101-155t152-103.5 181-37T680.5 242 833 344.5 935 498q-42 104-126 179z"
    />
  </svg>
);

export default SvgShow;
