import * as React from "react";
import { SVGProps } from "react";

const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 1010 1000" {...props}>
    <path
      fill="currentColor"
      d="M875 94H125q-34 0-57.5 23.5T44 175v600q0 36 17.5 66t47.5 47.5 66 17.5h650q36 0 66-17.5t47.5-47.5 17.5-66V175q0-34-23.5-57.5T875 94zm19 681q0 28-20.5 48.5T825 844H175q-28 0-48.5-20.5T106 775V175q0-8 5.5-13.5T125 156h750q8 0 13.5 5.5T894 175v600zM650 650H350q-21 0-35.5 14.5T300 700t14.5 35.5T350 750h300q21 0 35.5-14.5T700 700t-14.5-35.5T650 650zM225 300q0 21 14.5 35.5T275 350t35.5-14.5T325 300t-14.5-35.5T275 250t-35.5 14.5T225 300zm150 0q0 21 14.5 35.5T425 350t35.5-14.5T475 300t-14.5-35.5T425 250t-35.5 14.5T375 300zm150 0q0 21 14.5 35.5T575 350t35.5-14.5T625 300t-14.5-35.5T575 250t-35.5 14.5T525 300zm150 0q0 21 14.5 35.5T725 350t35.5-14.5T775 300t-14.5-35.5T725 250t-35.5 14.5T675 300zM225 500q0 21 14.5 35.5T275 550t35.5-14.5T325 500t-14.5-35.5T275 450t-35.5 14.5T225 500zm150 0q0 21 14.5 35.5T425 550t35.5-14.5T475 500t-14.5-35.5T425 450t-35.5 14.5T375 500zm150 0q0 21 14.5 35.5T575 550t35.5-14.5T625 500t-14.5-35.5T575 450t-35.5 14.5T525 500zm150 0q0 21 14.5 35.5T725 550t35.5-14.5T775 500t-14.5-35.5T725 450t-35.5 14.5T675 500z"
    />
  </svg>
);

export default SvgKeyboard;