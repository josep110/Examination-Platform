import React from 'react'
import Title from '../Components/Title'
import Grades from '../Components/ViewGrades'
import Help from '../Components/HelpForums'
import Calendar from '../Components/Calendar'
import ExamsCourses from '../Components/ExamCourses'
import { NavLink } from '../Components/Navbar/NavBarElements';

export default function ExaminerPage() {
  return (
    <div className="ExaminerPage">
        <Title Title = "Examiner Page"/>
        <Grades />
        <Help />
        <createExamButton />
        <Calendar />
        <ExamsCourses />

        <div className="CreateExamButton">
          <NavLink to="/CreateExam">
            <button class="CreateButton" role="button">Create Exam</button>
          </NavLink>
        </div>

    </div>
  );
}

