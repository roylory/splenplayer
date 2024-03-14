import React from "react"
import { twJoin } from "tailwind-merge"

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={twJoin(
          "inline-block animate-spin rounded-full border-4 border-solid border-gray-300 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] h-8 w-8",
        )}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Spinner
