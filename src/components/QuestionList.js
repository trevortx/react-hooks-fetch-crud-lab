import React, { useEffect } from "react"
import QuestionItem from "./QuestionItem"

function QuestionList( { questions, onRender, onDelete, onUpdate } ) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(questions => onRender(questions))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((questions) => {
          return <QuestionItem question={questions} key={questions.id} onDelete={onDelete} onUpdate={onUpdate} />
        })}
      </ul>
    </section>
  )
}

export default QuestionList;
