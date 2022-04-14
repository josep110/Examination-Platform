import React, { useState } from 'react'
import Title from '../Components/Title'
import Grades from '../Components/ViewGrades'
import Help from '../Components/HelpForums'
import Calendar from '../Components/Calendar'
import ExamsCourses from '../Components/ExamCourses'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from "react-router-dom"

export default function ExamineePage() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout(){
    setError('')
    try{
        await logout()
        history.push('./signin')
    } catch{
        setError('Failed to log out')
    }
}
  return (
    <div className="ExamineePage">
        <Title Title = "Examinee Page"/>
        <Grades />
        <Help />
        <Calendar />
        <ExamsCourses />
        <Card>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    <button class="signoutButton" variant="link" onClick={handleLogout}>Log out</button>
                </div>
    </div>
  );
}

  function Currentexams() {
    return (
      <div className="CurrentExams">
          <h1>Current Exams</h1>
  
      </div>
    );
  }

