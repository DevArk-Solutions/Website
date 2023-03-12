import * as React from "react";
import { SVGProps } from "react";

const FrontendIconImage = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className="rounded-2xl text-primary-700"
        width={138}
        height={138}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            opacity={0.28}
            x={19.744}
            y={27.899}
            width={86.448}
            height={73.96}
            rx={12}
            fill="currentColor"
        />
        <circle cx={30.982} cy={40.809} r={5.11} fill="currentColor" />
        <circle cx={44.42} cy={40.809} r={5.11} fill="currentColor" />
        <circle cx={57.859} cy={40.809} r={5.11} fill="currentColor" />
        <circle cx={90.613} cy={82.457} r={27.644} fill="currentColor" />
        <path
            d="m81.861 76.318-8.185 6.14 8.185 6.14M99.363 76.318l8.188 6.14-8.188 6.14M92.658 72.223l-4.093 20.468"
            stroke="#fff"
            strokeWidth={3.784}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path opacity={0.1} fill="currentColor" d="M0 0h138v138H0z" />
    </svg>
);

export default FrontendIconImage;
