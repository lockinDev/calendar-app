import React from 'react'

export const CalendarEvent = ({event}) => {

    const {title, notes} = event;
    return (
        <div>
            <span>{title}</span>
            <strong> - {notes}</strong>
        </div>
    )
}
