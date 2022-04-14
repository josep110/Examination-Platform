import React from 'react'
import Title from '../Components/Title'
import Grades from '../Components/ViewGrades'
import Calendar from '../Components/Calendar'
import ExamsCourses from '../Components/ExamCourses'
import Forums from "../Components/HelpForums"
import { NavLink } from '../Components/Navbar/NavBarElements';

function Main() {
  return (
    <div className="AdminPage">
        <Title Title = "Admin Page"/>
        <Grades />
        <Calendar />
        <ExamsCourses />
        <Forums />

        <div className="CreateExamButton">
          <NavLink to="/CreateExam">
            <button class="CreateButton" role="button">Create Exam</button>
          </NavLink>
        </div>

    </div>
  );
}

export default Main;