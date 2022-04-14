import React, { useEffect, useState } from "react";
import { useAuth } from '../contexts/AuthContext'
import { db } from "../Components/config";

function Grades() {

    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const email = currentUser.email

    useEffect(() => {
        const getQuestionsFromFirebase = [];
        const subscriber = db
        .collection("/Grades").where("Email", "==", email.toString())
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

    return (
        <div className = "Grades">
            <h1> Grades:</h1>
                { posts.length > 0   ? (
                    posts.map((post) => 
                        <div className="ForumDisplaySmall"  key = {post.key}>
                            <h3>{post.ExamName} : {post.Score}/{post.TotalMarks} marks</h3>
                         </div>)
                    
                ) : (
                    <h1>no answers yet</h1>
                    
                )} 
        </div>
        
    )
  }

  export default Grades;