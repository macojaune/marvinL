import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import FormConfirmation from "./FormConfirmation"


export default function ContactForm () {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  
  const questions = ["Question 1 ?", "Question 2 ?","Question 3 ?","Je résume", "Envoyé"];
  const maxSteps = questions.length

  const [answers, setAnswer] = useState({answer1: "", answer21: "", answer22: "", answer3: ""})
  
  const content = [
    <Question1 answers={answers} setAnswer={setAnswer} key="1"/>,
    <Question2 answers={answers} setAnswer={setAnswer} key="2"/>,
    <Question3 answers={answers} setAnswer={setAnswer} key="3"/>,
    <FormConfirmation answers={answers} key="4"/>,
    "..."
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='h-half-screen w-2/3 flex flex-col gap-1'>
      <div className='h-1/5 flex flex-col justify-center items-center text-4xl'>
        {questions[activeStep]}
      </div>
      <div className='h-3/5 justify-center items-center'>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
        >
          {content.map((step, index) => (
            <div className='h-48' key={index}>
              {content[index]}
            </div>
          ))}
        </SwipeableViews>
      </div>
      <div className='h-1/5 flex flex-row justify-center items-center gap-5'>
      {activeStep > maxSteps - 2 ? "" :
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{
            backgroundColor: "transparent",
            gap: "20px"
          }}
          backButton={
            <button 
              className='bg-salmon text-washed-white font-bold p-3 h-fit disabled:opacity-75'
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Précédent
            </button>
          }
          nextButton={
            <button 
              className='bg-salmon text-washed-white font-bold p-3 h-fit disabled:opacity-75'
              onClick={handleNext}
            >
              {activeStep >= maxSteps - 2 ? "Envoyer" : "Suivant"}
            </button>
          }
        >
        </MobileStepper> }
      </div>
    </div>
  )
}