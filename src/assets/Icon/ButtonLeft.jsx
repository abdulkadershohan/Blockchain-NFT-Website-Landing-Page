import * as React from "react"

const ButtonLeft = (props) => (
    <svg
        width={19}
        height={71}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7.879.5h10.505v69.596H7.879v-8.093h5.252V8.593H7.88V.5Z"
            fill="url(#a)"
        />
        <path fill="#AD1AAF" d="M0 13.631h5.253v44.647H0z" />
        <defs>
            <linearGradient
                id="a"
                x1={44.647}
                y1={6.974}
                x2={258.853}
                y2={49.335}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#AD1AAF" />
                <stop offset={0.62} stopColor="#AD1AAF" />
                <stop offset={1} stopColor="#AD1AAF" />
            </linearGradient>
        </defs>
    </svg>
)

export default ButtonLeft
