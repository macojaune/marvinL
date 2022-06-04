import React from "react"

export default function Question3 ({answers, setAnswer}) {
  return(
    <div className="h-44 w-70 flex justify-center items-center">
      <fieldset 
        onChange={(e) => {
          setAnswer({ ...answers, answer3: e.target.value})
        }}
        className="w-2/3 flex flex-row justify-center items-center gap-1 flex-wrap">
          <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio" value="Réponse 1"/> Réponse 1</label>
          <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio" value="Réponse 2"/> Réponse 2</label>
          <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio" value="Réponse 3"/> Réponse 3</label>
          <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio" value="Réponse 4"/> Réponse 4</label>
          <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio" value="Réponse 5"/> Réponse 5</label>
        </fieldset>
    </div>
  )
}