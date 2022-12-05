import * as React from "react"

const ArrowIcon = (props) => (
    <svg
        width={51}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            d="M1.5 12.75h47"
        />
        <path
            d="m33.474.856 16.264 11.617a.3.3 0 0 1-.174.545H33.3a.3.3 0 0 1-.3-.3V1.1a.3.3 0 0 1 .474-.245Z"
            fill="#fff"
        />
    </svg>
)

export default ArrowIcon
