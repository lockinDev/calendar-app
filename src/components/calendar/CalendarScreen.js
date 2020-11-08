import React from 'react'
import { Calendar, momentLocalizer }  from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'

import 'react-big-calendar/lib/css/react-big-calendar.css';


 const localizer = momentLocalizer(moment);

 const events = [{
    title : 'First event', start : moment().toDate(), 
    end : moment().add( 2, 'hours' ).toDate(), 
    bgcolor : '#fafafa' //this is a own property
 }];

export const CalendarScreen = () => {


    const eventStyleGetter = (event, start, end, isSelected) => {

        console.log(event, start, end, isSelected);

        const style = {
            backgroundColor : '#367CF7', 
            borderRadius : '0px', 
            opacity : 0.8, 
            display: 'block', 
            color: 'white'
        }

        return {
            style
        }
    };

    return (
        <div className = "calendar-screen">
            <Navbar />

            <Calendar 
                localizer = {localizer}
                events = {events}
                startAccessor = "start"
                endAccesor = "end"
                eventPropGetter = { eventStyleGetter }
            />

        </div>
    )
}
