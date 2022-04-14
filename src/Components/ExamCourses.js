import React, { useEffect, useState } from "react";
import { db } from "./config";
import {NavLink} from './Navbar/NavBarElements';
import Questions from "../Pages/Questions"


const ExamCourses = () => {

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
    
    return (
        <div className = "ExamsCourses">
                { exams.length > 0   ? (
                    exams.map((post) => 
                        <div className="CourseDisplay" key = {post.key}>
                            <nav>
                                <NavLink to={'/Questions/:' + post.id} className="NameOfCourse" activeStyle>
                                    {post.ExamName} 
                                </NavLink>
                            </nav>
                            <h2 className="DurationOfCourse">Total Marks: {post.TotalMarks} &nbsp; &nbsp; &nbsp;Exam Duration:{post.ExamDuration} Minuites</h2>
                            <h2 className="DescriptionOfCourse">{post.ExamDescription}</h2>
                            <h2 className="StartDateCourse">Start Date: {post.StartDate}</h2>
                            <h2 className="EndDateCourse">End Date: {post.EndDate}</h2>
                            </div>)
                    
                ) : (
                    <h1>no answers yet</h1>
                    
                )} 
        </div>
        
    )
}
export default ExamCourses;