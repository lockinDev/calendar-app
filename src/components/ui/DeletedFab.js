import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeletedActive } from '../../actions/eventsCalendar';

export const DeletedFab = () => {

     const dispatch = useDispatch();

     const handleDelete = () => {
         dispatch (eventDeletedActive());
     }

    return (
        <button className = "btn btn-danger fab-danger"
        onClick = {handleDelete} >
            <i className="fas fa-trash" style = { {paddingRight: 10}}>
                
            </i>

            Delete event.
        </button>
    )
}
