import React from "react"

export default function Question1 ({answers, setAnswer}) {
  return(
    <div className="h-44 w-70 flex flex-row items-center justify-center p-10">
      <input
        type="text"
        placeholder='Réponse 1'
        value={answers.answer1}
        onChange={(e) => {
          setAnswer({ ...answers, answer1: e.target.value})
        }}
        className="p-5 text-dark-cyan"/>
    
    </div>
  )
}