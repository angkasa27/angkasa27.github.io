export default function burger({ className, ...props }) {
  return (
    <svg
      className={className}
      width="623"
      height="664"
      viewBox="0 0 623 664"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64 382.5L64 182.2"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M64 163.2L64 124"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M564 190V390.3"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M564 409.3V448.5"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  )
}
