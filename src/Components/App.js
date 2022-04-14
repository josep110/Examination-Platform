import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Dashboard from "../Pages/Dashboard"
import PrivateRoute from "./PrivateRoute"
import './App.css'
import Navbar from './Navbar'
import ExamineePage from '../Pages/ExamineePage'
import ExaminerPage from '../Pages/ExaminerPage'
import AdminPage from '../Pages/AdminPage'
import CreateExam from "../Pages/CreateExam"
import HelpPage from  "../Pages/HelpPage";
import Questions from "../Pages/Questions";
import Calendar from "../Pages/Calendar";
import Forums from "../Pages/HelpPage"

let script_index = 1;

function App() {

  
  return (

        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              <Route path="/" exact component={ExamineePage} />
              <PrivateRoute path="/Home"  component={ExamineePage} />
              <PrivateRoute path="/Help" component={ HelpPage } />
              <PrivateRoute path="/Examiner"  component={ExaminerPage} />
              <PrivateRoute path="/CreateExam"  component={CreateExam } />
              <PrivateRoute path="/Admin"  component={AdminPage } />
              <PrivateRoute path="/Forum"  component={Forums}  />
              <PrivateRoute path="/Calendar"  component={Calendar } />
              <PrivateRoute path="/Questions/:script_index" exact component={Questions } />
            </Switch>
          </AuthProvider>

        </Router>

  
  )

  
}

export default App
