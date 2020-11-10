import React, {useState} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Navbar } from "../ui/Navbar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "First event",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa", //this is a own property,
    notes: "congratulation your first note",
    user: {
      _id: "1234",
      name: "Lockin",
    },
  },
];

export const CalendarScreen = () => {
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

  const onDoubleClickEvent = (e) => {console.log(e)};

  const onSelectEvent = (e) => {console.log(e)};

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
    </div>
  );
};
