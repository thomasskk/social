import * as React from "react";
import { SVGProps } from "react";

const SvgLiveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M500 25q-129 0-240 65-107 63-170 170-65 111-65 240t65 240q63 107 170 170 111 65 240 65t240-65q107-63 170-170 65-111 65-240t-65-240Q847 153 740 90 629 25 500 25zm0 800q-88 0-164-44-74-43-117-117-44-76-44-164t44-164q43-74 117-117 76-44 164-44t164 44q74 43 117 117 44 76 44 164t-44 164q-44 73-117 117-76 44-164 44zm0-570q-67 0-123 33t-89 89-33 123 33 123 89 89 123 33 123-33 89-89 33-123-33-123-89-89-123-33zm0 340q-29 0-53-16t-35-42.5-5.5-55 26-49 49-26 55 5.5 42.5 35 16 53q0 39-28 67t-67 28z"
    />
  </svg>
);

export default SvgLiveFill;
