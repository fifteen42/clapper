import { cn } from '@/lib/utils'

export function NatureIcon({
  className = '',
}: {
  className?: string
} = {}) {
  return (
    <svg
      id="nature-icon-svg"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`h-full w-full fill-current`, className)}
      width="400"
      height="400"
      viewBox="0, 0, 400,400"
    >
      <g id="nature-icon-svg-g">
        <path
          id="nature-icon-svg-g-path-0"
          d="M232.037 90.250 C 199.735 91.563,171.332 112.931,161.107 143.613 C 146.391 187.767,172.994 234.758,218.426 244.860 L 222.222 245.705 222.222 267.482 L 222.222 289.259 177.778 289.259 L 133.333 289.259 133.333 272.778 L 133.333 256.296 138.902 256.296 L 144.470 256.296 144.365 232.492 L 144.259 208.687 143.032 206.194 C 141.635 203.357,139.564 201.518,136.693 200.564 C 133.477 199.496,96.654 199.895,94.547 201.021 C 92.095 202.331,90.487 203.948,89.367 206.229 L 88.333 208.333 88.230 232.315 L 88.127 256.296 93.693 256.296 L 99.259 256.296 99.259 280.185 L 99.259 304.074 188.889 304.074 L 278.519 304.074 278.519 296.667 L 278.519 289.259 261.667 289.259 L 244.815 289.259 244.815 267.795 L 244.815 246.330 246.204 246.101 C 286.135 239.514,313.759 207.681,313.689 168.333 C 313.610 123.724,276.708 88.435,232.037 90.250 M243.829 103.518 C 297.210 110.516,319.864 175.463,282.345 213.937 C 248.411 248.733,189.607 235.521,173.752 189.538 C 158.036 143.962,196.084 97.260,243.829 103.518 M112.721 155.711 C 102.056 158.298,96.730 169.900,101.644 179.842 C 107.743 192.183,126.047 191.965,131.889 179.481 C 137.934 166.563,126.490 152.371,112.721 155.711 "
          stroke="none"
          // fill="#000000"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  )
}
