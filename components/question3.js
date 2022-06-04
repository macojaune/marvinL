import React from "react"

export default function Question3 () {
  return(
    <div>
      <fieldset className="flex flex-row gap-5">
        {/* <legend>Titre</legend> */}
        <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio"/> Réponse 1</label>
        <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio"/> Réponse 2</label>
        <label className="bg-washed-white text-dark-cyan font-semibold p-5"><input type="radio" name="radio"/> Réponse 3</label>
      </fieldset>
    </div>
  )
}