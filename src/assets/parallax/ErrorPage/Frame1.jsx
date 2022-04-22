export default function burger({ className, ...props }) {
  return (
    <svg
      className={className}
      width="872"
      height="685"
      viewBox="0 0 872 685"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M307.4 389V397"
        stroke="#231F20"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M307.4 172.9V373.2"
        stroke="#231F20"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M307.4 142.2V161"
        stroke="#231F20"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  )
}
