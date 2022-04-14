import React, { useEffect , useState } from "react";
import { db } from "./config";

const AddPost = () => {

    let nextID = 0;

    useEffect(() => {
        var getPostsFromFirebase = [];
        const subscriber = db
        .collection("Forums")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            nextID = getPostsFromFirebase.length+1;
        });
        return () => subscriber;
    });

    function UploadPost(event){
        event.preventDefault();


        var postSkel = [...event.target.elements]   // TODO: make adding posts work!
        
        const postData = postSkel.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
              accumulator[currentValue.id] = currentValue.value;
            }
      
            return accumulator;
          }, {})

        //postData.unshift(nextID)

        db.collection('Forums').add(postData);        
    }

    return(
        <>
        <div className="AddPost">
            <h1>Add Post</h1>
            <form onSubmit={UploadPost}> 
            <input id="username" className="BigInput" type="text" placeholder="Username"/><br/>
            <input id="input" className="LongInput" type="text" placeholder="Text"/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
} 

export default AddPost;

// TODO : Add delete button, replies, datetime submitted.