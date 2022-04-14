import {Link} from "react-router-dom";
import {db} from "./config"
import React, { useEffect, useState } from "react";
 


const Help = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
        .collection("Forums")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
        });
        console.log(posts.length);
        return () => subscriber();
    }, []);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    console.log(posts);
    return (
        <><div className="Help">
        <h1><Link className="expand" to="/Help">Forum</Link></h1>
        <div className="forum-small">
        {posts.length > 0 ? (
            posts.map((post) =>
                <div className="ForumDisplaySmall">
                    <h2>{post.input}<br/></h2>
                    
                </div>
            )
        ) : (
            <h2>Nothing here.</h2>
        )}
        </div>
        
        </div></>
    )
}             

  export default Help;