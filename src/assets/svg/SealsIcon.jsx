import * as React from "react"

const SealsIcon = (props) => (
    <svg
        width={49}
        height={48}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m41.5 14-17-10-17 10v20l17 10 17-10V14Z"
            stroke="#F81DFB"
            strokeWidth={3}
            strokeLinejoin="round"
        />
        <path
            d="M24.5 22v8M32.5 18v12M16.5 26v4"
            stroke="#F81DFB"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default SealsIcon
