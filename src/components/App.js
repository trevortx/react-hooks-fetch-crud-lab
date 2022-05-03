import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleRender(questions) {
    console.log(questions)
    setQuestions(questions)
  }

  function handleSubmit(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function handleUpdate(updatedQuestion) {
    console.log(updatedQuestion)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmit={handleSubmit} /> : <QuestionList questions={questions} onRender={handleRender} onDelete={handleDelete} onUpdate={handleUpdate} />}
    </main>
  );
}

export default App;
