/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dC6uaKOtwqm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full h-[600px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <img src="/placeholder.svg" alt="Map of Istanbul" className="object-cover w-full h-full" />
        <div className="absolute top-4 left-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Street Cat Sightings</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Explore the locations of street cats spotted in Istanbul, Turkey.
          </p>
        </div>
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 p-2 rounded-lg shadow-md">
          <Button variant="ghost" size="icon" className="rounded-full">
            <PlusIcon className="w-5 h-5" />
            <span className="sr-only">Zoom in</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MinusIcon className="w-5 h-5" />
            <span className="sr-only">Zoom out</span>
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-950 p-2 rounded-lg shadow-md">
          <Button variant="ghost" size="icon" className="rounded-full">
            <CompassIcon className="w-5 h-5" />
            <span className="sr-only">Center map</span>
          </Button>
        </div>
        <div className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
          <span>12</span>
        </div>
        <div className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md left-20">
          <span>8</span>
        </div>
        <div className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md left-40">
          <span>5</span>
        </div>
      </div>
    </div>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
