import React from "react"

export default function Question2 ({answers, setAnswer}) {
  return(
    <div className="h-44 w-70 flex flex-col gap-1 justify-center items-center">
      <select 
        onChange={(e) => {
          setAnswer({ ...answers, answer21: e.target.value})
        }}
        className="text-dark-cyan p-5"
        defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Sélectionner</option>
          <option value="Réponse 1">Réponse A1</option>
          <option value="Réponse 2">Réponse A2</option>
          <option value="Réponse 3">Réponse A3</option>
      </select>
      <select 
        onChange={(e) => {
          setAnswer({ ...answers, answer22: e.target.value})
        }}
        className=" text-dark-cyan p-5"
        defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>Sélectionner</option>
          <option>Réponse B1</option>
          <option>Réponse B2</option>
          <option>Réponse B3</option>
      </select>
    </div>
  )
}