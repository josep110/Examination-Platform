
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import pars from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TheDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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


function CalendarMeth() {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    
    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
      }  
  
    return (
      <div className="Calendar">
          <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400, margin: "5px" }} /> </div>
          
  );
  }

  export default CalendarMeth;