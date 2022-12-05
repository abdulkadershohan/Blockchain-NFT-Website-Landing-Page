import * as React from "react"

const CollectionIcon = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M7.5 10.5a1.5 1.5 0 1 1 0-3h33a1.5 1.5 0 0 1 0 3h-33Zm6-6a1.5 1.5 0 0 1 0-3h21a1.5 1.5 0 0 1 0 3h-21ZM0 39a4.5 4.5 0 0 0 4.5 4.5h39A4.5 4.5 0 0 0 48 39V18a4.5 4.5 0 0 0-4.5-4.5h-39A4.5 4.5 0 0 0 0 18v21Zm4.5 1.5A1.5 1.5 0 0 1 3 39V18a1.5 1.5 0 0 1 1.5-1.5h39A1.5 1.5 0 0 1 45 18v21a1.5 1.5 0 0 1-1.5 1.5h-39Z"
        fill="#F81DFB"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default CollectionIcon
