import format from "date-fns/format";
import getDay from "date-fns/getDay";
import pars from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TheDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../Components/Title"


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    pars,
    startOfWeek,
    getDay,
    locales,
});

const events = [];

function Main() {
    return(
        <div className="CalendarBgd">
        <App />
        </div>
       
    )
}

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h2>Exam Timeable</h2>
            
            <div>
                
                <input type="text" placeholder="Exam Name"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> 
                <TheDatePicker placeholderText="Exam Date"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <TheDatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> 
               
              <button onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400, margin: "5px" }} /> </div>
            
    );
}

export default Main;