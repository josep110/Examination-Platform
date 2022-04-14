import Title from '../Components/Title'
import Counter from "../Components/Countdown"
import { db } from "../Components/config";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router-dom"


function Questions() {

    var props = useParams();
    console.log(props);
    return (
        <div className="QuestionsPage">
         <Title Title="Exam"/>
         <QuestionsForm i = {(props.script_index.replace(":","")).toString()}/>
        </div>
    );
}

function QuestionsForm({i}){

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const { currentUser, logout } = useAuth()

    useEffect(() => {
        const getQuestionsFromFirebase = [];
        const subscriber = db
        .collection("/Exams").where("id", "==", i)
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => { 
                getQuestionsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getQuestionsFromFirebase);
            setLoading(false);
        });
        return () => subscriber();
    }, []);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    const questions = [
      {
        text: posts[0]["Question1"],
        mark: posts[0]["Question1Mark"],
        options: [
            { id: 0, text: posts[0]["Question1WrongAnswer1"], isCorrect: false },
            { id: 1, text: posts[0]["Question1WrongAnswer2"], isCorrect: false },
            { id: 3, text: posts[0]["Question1RightAnswer"], isCorrect: true },
            { id: 2, text: posts[0]["Question1WrongAnswer3"], isCorrect: false },
        ],
        },
    {
      text: posts[0]["Question2"],
      mark: posts[0]["Question2Mark"],
      options: [
          { id: 0, text: posts[0]["Question2WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question2WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question2WrongAnswer3"], isCorrect: false },
          { id: 3, text: posts[0]["Question2RightAnswer"], isCorrect: true },
      ],
      },
    
    {
      text: posts[0]["Question3"],
      mark: posts[0]["Question3Mark"],
      options: [
        { id: 3, text: posts[0]["Question3RightAnswer"], isCorrect: true },
          { id: 0, text: posts[0]["Question3WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question3WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question3WrongAnswer3"], isCorrect: false },
      ],
      },
    {
      text: posts[0]["Question4"],
      mark: posts[0]["Question4Mark"],
      options: [
          { id: 0, text: posts[0]["Question4WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question4WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question4WrongAnswer3"], isCorrect: false },
          { id: 3, text: posts[0]["Question4RightAnswer"], isCorrect: true },
      ],
      },
    {
      text: posts[0]["Question5"],
      mark: posts[0]["Question5Mark"],
      options: [
          { id: 0, text: posts[0]["Question5WrongAnswer1"], isCorrect: false },
          { id: 3, text: posts[0]["Question5RightAnswer"], isCorrect: true },
          { id: 1, text: posts[0]["Question5WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question5WrongAnswer3"], isCorrect: false },
      ],
      },
    {
      text: posts[0]["Question6"],
      mark: posts[0]["Question6Mark"],
      options: [
          { id: 0, text: posts[0]["Question6WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question6WrongAnswer2"], isCorrect: false },
          { id: 3, text: posts[0]["Question6RightAnswer"], isCorrect: true },
          { id: 2, text: posts[0]["Question6WrongAnswer3"], isCorrect: false },
      ],
      },
    {
      text: posts[0]["Question7"],
      mark: posts[0]["Question7Mark"],
      options: [
          { id: 3, text: posts[0]["Question7RightAnswer"], isCorrect: true },
          { id: 0, text: posts[0]["Question7WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question7WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question7WrongAnswer3"], isCorrect: false },

      ],
      },
    {
      text: posts[0]["Question8"],
      mark: posts[0]["Question8Mark"],
      options: [
          { id: 0, text: posts[0]["Question8WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question8WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question8WrongAnswer3"], isCorrect: false },
          { id: 3, text: posts[0]["Question8RightAnswer"], isCorrect: true },
      ],
      },
    {
      text: posts[0]["Question9"],
      mark: posts[0]["Question9Mark"],
      options: [
          { id: 0, text: posts[0]["Question9WrongAnswer1"], isCorrect: false },
          { id: 1, text: posts[0]["Question9WrongAnswer2"], isCorrect: false },
          { id: 3, text: posts[0]["Question9RightAnswer"], isCorrect: true },
          { id: 2, text: posts[0]["Question9WrongAnswer3"], isCorrect: false },
      ],
      },
    {
      text: posts[0]["Question10"],
      mark: posts[0]["Question10Mark"],
      options: [
          { id: 0, text: posts[0]["Question10WrongAnswer1"], isCorrect: false },
          { id: 3, text: posts[0]["Question10RightAnswer"], isCorrect: true },
          { id: 1, text: posts[0]["Question10WrongAnswer2"], isCorrect: false },
          { id: 2, text: posts[0]["Question10WrongAnswer3"], isCorrect: false },
      ],
      },
    ];
        
      const optionClicked = (isCorrect, mark) => {
        if (isCorrect) {
          setScore(score + mark);
        }
    
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      };  
    
      const name = posts[0]["ExamName"]
      const totalmarks = posts[0]["TotalMarks"]

      const email = currentUser.email

      const restartGame = () => {
        DatabaseSend({score, name, totalmarks, email})
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
      };

      
    return (
        <div className="QuestionsContainer">
            <div class="timer">
                <label class="t_header"><i><b>Times</b></i></label><br/><br/>
                <label class="tms">Starting time: </label><br/>
                <label class="tms">Submission time: 11:59</label><br/>
                <label class="tms"> Time remaining:</label><br/>
                <label class="cd" id="countdown"></label>
                
            </div><br/>


          <div className="App">
            <div className="Score">
              <h2 className="Score">Score: {score} / {posts[0]["TotalMarks"]}</h2>
            </div>
            {showResults ? (
              <div className="final-results">
                <h1>Final Results</h1>
                <h2>
                  {score} out of {posts[0]["TotalMarks"]} correct - (
                  { Math.round((score / posts[0]["TotalMarks"]) * 100) })%
                </h2>
                <button onClick={() => restartGame()}>Restart game</button>
              </div>
            ) : (
              <div className="question-card">
                <h2>
                  Question: {currentQuestion + 1} out of {questions.length}
                </h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
      
                <ul>
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <li
                        key={option.id}
                        onClick={() => optionClicked(option.isCorrect, parseInt(questions[currentQuestion].mark))}
                      >
                        {option.text}
                      </li>
                    );
                  })}
                </ul>
            </div>
            
          )}
          </div>
        </div>
      );
  }


  function DatabaseSend({score, name, totalmarks, email}) {

      
  
      db.collection("Grades").add({
        Score : score,
        ExamName : name,
        TotalMarks :totalmarks,
        Email: email,
      });
      
    

    return (
      console.log("added")
    );
}

  export default Questions;