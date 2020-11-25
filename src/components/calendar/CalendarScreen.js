import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Navbar } from "../ui/Navbar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import { NewFab } from "../ui/NewFab";


import './calendar.css'
import { eventSetActive } from "../../actions/eventsCalendar";

const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

  const dispatch = useDispatch();

  const {events} = useSelector(state => state.calendar)

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: "#367CF7", 
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

   const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClickEvent = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChangeEvent = (e) => {
      setLastView(e)
      localStorage.setItem('lastView', e);
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccesor="end"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClickEvent}
        onSelectEvent={onSelectEvent}
        onView={onViewChangeEvent}
        view = {lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />

      <NewFab onDoubleClickEvent = {onDoubleClickEvent}/>

    </div>
  );
};
