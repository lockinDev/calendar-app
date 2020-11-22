import React from 'react'

export const NewFab = ({onDoubleClickEvent}) => {


    const handleClickNew = () =>{
        onDoubleClickEvent();
    }

    return (
        <button className = "btn btn-primary fab" onClick = {handleClickNew}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
