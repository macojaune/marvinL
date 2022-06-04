import React, { useState } from 'react'
import Question1 from "/components/question1"
import Question2 from "/components/question2"
import Question3 from "/components/question3"
import RecapContact from "/components/recapContact"


export default function ContactForm () {
  const [step, setStep] = useState(0);
  const questions = ["Question 1 ?", "Question 2 ?","Question 3 ?","Je résume"];

  const nextQuestion = () => {
    setStep(step + 1);
  }
  const previousQuestion = () => {
    setStep(step - 1);
  }

  const input = () => {
    if(step == 0){
      return(<Question1/>)
    }
    else if(step == 1){
      return(<Question2/>)
    }
    else if(step == 2){
      return(<Question3/>)
    }
    else if(step == 3){
      return(<RecapContact/>)
    }
  }

  return (
    <div className='h-half-screen w-2/3 flex flex-col gap-1'>
      <div className='h-1/5 flex flex-col justify-center items-center text-4xl'>
        {questions[step]}
      </div>
      <div className='h-3/5 flex flex-col justify-center items-center'>
        {input()}
      </div>
      <div className='h-1/5 flex flex-row justify-center items-center gap-5'>
        <button 
          className='bg-salmon text-washed-white font-bold p-3 h-fit disabled:opacity-75'
          onClick={previousQuestion}
          disabled={step <= 0}
          >
            Précédent
        </button>
        <button 
          className='bg-salmon text-washed-white font-bold p-3 h-fit disabled:opacity-75'
          onClick={nextQuestion}
          disabled={step >= questions.length - 1}
          >
            Suivant</button>
      </div>
    </div>
  )
}