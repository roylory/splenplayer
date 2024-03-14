import React, { useState } from "react"
import { twJoin } from "tailwind-merge"
import { getVideoFiles } from "./utils/getVideoFiles"

interface DragDropAreaProps {
  setVideoFiles: React.Dispatch<React.SetStateAction<File[]>>
}

const DragDropArea: React.FC<DragDropAreaProps> = ({ setVideoFiles }) => {
  const [dragging, setDragging] = useState(false)

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const files = Array.from(e.dataTransfer.files)
    const videoFiles = getVideoFiles(files)
    setVideoFiles(videoFiles)
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-4">
      <div
        className={twJoin(
          "absolute inset-10 rounded-xl border-dashed border-4 border-gray-300 cursor-pointer flex flex-col items-center justify-center transition-colors duration-300 ease-in-out",
          dragging && "border-blue-500 bg-blue-100",
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {dragging ? (
          <p className="text-xl font-semibold px-4 text-center">Drop here</p>
        ) : (
          <>
            <p className="text-xl font-semibold px-4 text-center">
              Drag and drop video files here
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default DragDropArea
