import * as React from "react";
import { SVGProps } from "react";

const SvgBrowse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M125 744q-8 0-13.5-5.5T106 725V125q0-8 5.5-13.5T125 106h600q8 0 13.5 5.5T744 125h62q0-34-23.5-57.5T725 44H125q-34 0-57.5 23.5T44 125v600q0 34 23.5 57.5T125 806v-62zm417 150H275q-8 0-13.5-5.5T256 875V275q0-8 5.5-13.5T275 256h600q8 0 13.5 5.5T894 275v267q38 35 60 83h2V275q0-34-23.5-57.5T875 194H275q-34 0-57.5 23.5T194 275v600q0 34 23.5 57.5T275 956h350v-2q-48-21-83-60zm430 34-99-99q27-38 32-83.5t-11.5-88-52-72.5-80.5-39-89 3.5-77 45.5-45.5 77-3.5 89 39 80.5 72.5 52 88 11.5 83.5-32l99 99zM606 725q0-32 16-59.5t43.5-43.5 59.5-16 59.5 16 43.5 43.5 16 59.5-16 59.5-43.5 43.5-59.5 16-59.5-16-43.5-43.5-16-59.5z"
    />
  </svg>
);

export default SvgBrowse;
