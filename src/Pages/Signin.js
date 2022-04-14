import React, { useRef, useState } from "react";
import "./style2.css";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"



export default function Signin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

  
    try{
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      history.push("/Home")
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)

  }
  return (
    <div className="ExaminerPage">
    <Card class="name">
      <Card.Body>
        <div className="SignInContainer" > 
        <h1 className = "text-center mb-4" class="names" id="signUp">Sign in</h1>
        
        {error && <Alert class="alert" variant="danger"><div class = "error">{error}</div></Alert>}
        <Form class="main" onSubmit={handleSubmit}>
          <div className="SI">

            <div class="names" id="login">Not a member yet? <Link to="/signup" class="signUp">Sign up</Link> here</div>
            <div>
              <div className = "eamilPos">
                <h2  class="name" id="head">Email address:</h2>
              </div>
              <input type="email" name="email" class="type" ref={emailRef} required></input>
            </div>
            <div>
              <h2 class="names" id="head">Password:</h2>
              <input type="password" name="password" class="type" ref={passwordRef} required></input>
            </div>
            <button class="button" type="submit" disabled={loading}>Sign In</button>
          </div>
        </Form>
        </div>
      </Card.Body>
    </Card>
    </div>
      )
}