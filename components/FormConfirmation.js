import React from "react"

export default function FormConfirmation ({answers}) {
  return(
    <div className="h-full flex flex-row items-center justify-center">
      <div className="flex flex-col gap-3 justify-center items-start text-lg">
        <div>Question 1: {answers.answer1}</div>
        <div>Question 2.1: {answers.answer21}</div>
        <div>Question 2.2: {answers.answer22}</div>
        <div>Question 3: {answers.answer3}</div>
      </div>
    </div>
  )
}