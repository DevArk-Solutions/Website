import * as React from "react";
import { SVGProps } from "react";

const BackendIconImage = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className="rounded-2xl text-primary-700"
        width={138}
        height={138}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={15.588}
            y={26.725}
            width={50.092}
            height={71.336}
            rx={8}
            fill="currentColor"
        />
        <rect
            opacity={0.32}
            x={72.32}
            y={26.725}
            width={50.092}
            height={71.336}
            rx={8}
            fill="currentColor"
        />
        <path
            opacity={0.3}
            d="M41.9 97.104v7.171a7 7 0 0 0 7 7h40.966a7 7 0 0 0 7-7v-7.171"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
        />
        <circle cx={97.366} cy={98.061} r={7.381} fill="currentColor" />
        <circle cx={40.634} cy={98.061} r={7.381} fill="#fff" />
        <rect
            opacity={0.5}
            x={22.235}
            y={36.148}
            width={36.798}
            height={10.068}
            rx={2}
            fill="#fff"
        />
        <rect
            opacity={0.6}
            x={78.967}
            y={36.148}
            width={36.798}
            height={10.068}
            rx={2}
            fill="currentColor"
        />
        <rect
            opacity={0.5}
            x={22.235}
            y={50.454}
            width={36.798}
            height={10.068}
            rx={2}
            fill="#fff"
        />
        <rect
            opacity={0.5}
            x={22.235}
            y={64.915}
            width={36.798}
            height={10.068}
            rx={2}
            fill="#fff"
        />
        <rect
            opacity={0.6}
            x={78.967}
            y={50.454}
            width={36.798}
            height={10.068}
            rx={2}
            fill="currentColor"
        />
        <rect
            opacity={0.6}
            x={78.967}
            y={64.915}
            width={36.798}
            height={10.068}
            rx={2}
            fill="currentColor"
        />
        <path opacity={0.1} fill="currentColor" d="M0 0h138v138H0z" />
    </svg>
);

export default BackendIconImage;
