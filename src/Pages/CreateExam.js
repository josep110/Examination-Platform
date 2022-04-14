
import React, { useEffect, useState } from "react";
import { db } from "../Components/config";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"

import Title from '../Components/Title'

function Main() {
  return (
    <div className="CreateExamPage">
        <Title Title = "Create Exam Page"/>
        <Survey />
    </div>
  );
}

const Survey = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("Exams").add(formData)
  };

  const [ selectedDate, setSelectedDate] = useState(null)
  const [ selectedDate1, setSelectedDate1] = useState(null)

  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState([]);
  useEffect(() => {
    const getExamsFromFirebase = [];
    const subscriber = db
    .collection("/Exams")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => { 
            getExamsFromFirebase.push({
                ...doc.data(),
                key: doc.id,
            });
        });
        setExams(getExamsFromFirebase);
        setLoading(false);
    });
    return () => subscriber();
    }, []);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

  const idExam = exams.length+1
  
  return (
    <div className="container">
      <h1>Create Exam Here:</h1>
      <form onSubmit={saveAnswer}>
        <input className="BigInput" type="text" id="ExamName" placeholder="Exam Name" required></input>
        <br />
        <input className="BigInput" type="text" id="ExamDescription" placeholder="Exam Description" ></input>
        <br />
        <input className="BigInput" type="text" id="ExamDuration" placeholder="Exam Duration"></input>
        <br />
        <input className="BigInput" type="text" id="TotalMarks" placeholder="Total Marks"></input>
        <br />
            <DatePicker id = "StartDate" className="BigInput"
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
            />
        <br />
            <DatePicker id = "EndDate" className="BigInput"
                selected={selectedDate1} 
                onChange={date => setSelectedDate1(date)}
                dateFormat="dd/MM/yyyy"
                minDate={selectedDate}
            />
        <br />
        <input className="BigInput" type="text" id="Question1" placeholder="Question 1"></input>
        <br />
        <input className="SmallInput" type="text" id="Question1RightAnswer" placeholder="Q1 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question1WrongAnswer1" placeholder="Q1 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question1WrongAnswer2" placeholder="Q1 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question1WrongAnswer3" placeholder="Q1 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question1Mark" placeholder="Q1 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question2" placeholder="Question 2"></input>
        <br />
        <input className="SmallInput" type="text" id="Question2RightAnswer" placeholder="Q2 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question2WrongAnswer1" placeholder="Q2 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question2WrongAnswer2" placeholder="Q2 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question2WrongAnswer3" placeholder="Q2 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question2Mark" placeholder="Q2 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question3" placeholder="Question 3"></input>
        <br />
        <input className="SmallInput" type="text" id="Question3RightAnswer" placeholder="Q3 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question3WrongAnswer1" placeholder="Q3 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question3WrongAnswer2" placeholder="Q3 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question3WrongAnswer3" placeholder="Q3 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question3Mark" placeholder="Q3 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question4" placeholder="Question 4"></input>
        <br />
        <input className="SmallInput" type="text" id="Question4RightAnswer" placeholder="Q4 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question4WrongAnswer1" placeholder="Q4 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question4WrongAnswer2" placeholder="Q4 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question4WrongAnswer3" placeholder="Q4 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question4Mark" placeholder="Q4 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question5" placeholder="Question 5"></input>
        <br />
        <input className="SmallInput" type="text" id="Question5RightAnswer" placeholder="Q5 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question5WrongAnswer1" placeholder="Q5 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question5WrongAnswer2" placeholder="Q5 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question5WrongAnswer3" placeholder="Q5 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question5Mark" placeholder="Q5 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question6" placeholder="Question 6"></input>
        <br />
        <input className="SmallInput" type="text" id="Question6RightAnswer" placeholder="Q6 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question6WrongAnswer1" placeholder="Q6 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question6WrongAnswer2" placeholder="Q6 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question6WrongAnswer3" placeholder="Q6 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question6Mark" placeholder="Q6 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question7" placeholder="Question 7"></input>
        <br />
        <input className="SmallInput" type="text" id="Question7RightAnswer" placeholder="Q7 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question7WrongAnswer1" placeholder="Q7 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question7WrongAnswer2" placeholder="Q7 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question7WrongAnswer3" placeholder="Q7 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question7Mark" placeholder="Q7 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question8" placeholder="Question 8"></input>
        <br />
        <input className="SmallInput" type="text" id="Question8RightAnswer" placeholder="Q8 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question8WrongAnswer1" placeholder="Q8 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question8WrongAnswer2" placeholder="Q8 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question8WrongAnswer3" placeholder="Q8 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question8Mark" placeholder="Q8 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question9" placeholder="Question 9"></input>
        <br />
        <input className="SmallInput" type="text" id="Question9RightAnswer" placeholder="Q9 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question9WrongAnswer1" placeholder="Q9 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question9WrongAnswer2" placeholder="Q9 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question9WrongAnswer3" placeholder="Q9 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question9Mark" placeholder="Q9 Marks"></input>
        <br />
        <input className="BigInput" type="text" id="Question10" placeholder="Question 10"></input>
        <br />
        <input className="SmallInput" type="text" id="Question10RightAnswer" placeholder="Q10 Right Answer"></input>
        <input className="SmallInput" type="text" id="Question10WrongAnswer1" placeholder="Q10 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question10WrongAnswer2" placeholder="Q10 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question10WrongAnswer3" placeholder="Q10 Wrong Answer"></input>
        <input className="SmallInput" type="text" id="Question10Mark" placeholder="Q10 Marks"></input>
        <br />
        <input className="CreateSmall" id= "id" value={idExam}></input>
        <button>Submit to Firebase</button>
      </form>
      < NamesDetails />
      <NamesQuestions />
    </div>
    
  );
};

function NamesDetails () {
    return (
      <div className="DNames">
          <h2>Exam Name:</h2>
          <h2>Exam Description:</h2>
          <h2>Exam Duration:</h2>
          <h2>Exam Total Marks:</h2>
          <h2>Exam Start Date:</h2>
          <h2>Exam End Date:</h2>
      </div>
    );
  }

  function NamesQuestions () {
    return (
      <div className="QNames">
          <h2>Question 1:</h2>
          <h2>Question 2:</h2>
          <h2>Question 3:</h2>
          <h2>Question 4:</h2>
          <h2>Question 5:</h2>
          <h2>Question 6:</h2>
          <h2>Question 7:</h2>
          <h2>Question 8:</h2>
          <h2>Question 9:</h2>
          <h2>Question 10:</h2>
      </div>
    );
  }

export default Main;