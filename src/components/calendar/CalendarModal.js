import React, { useState } from "react";

import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";

import { customStyles } from "../../helpers/calendar-modal-custom-styles";


Modal.setAppElement("#root");

//next start hour
const startDate = moment().minutes(0).seconds(0).add(1, "hours");
const initialEndDate = startDate.clone().add(1, "hours");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [dateStart, setDateStart] = useState(startDate.toDate());
  const [dateEnd, setDateEnd] = useState(initialEndDate.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "Event",
    notes: "",
    start: startDate.toDate(),
    end: initialEndDate.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
        ...formValues, 
        start: e
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
        ...formValues, 
        end: e
    });
  };

  const handleInputChange = ({target}) => {
      setFormValues({
          ...formValues,
          [target.name]: target.value
      });
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault();

    validationDateTime(start, end);
    validationTitle(title);

    //closeModal();
    
  }


  const validationDateTime = (start, end) =>{
      
    const momentStart = moment( start );
    const momentEnd = moment( end );

    if(momentStart.isSameOrAfter(momentEnd)){
        return Swal.fire('Error', 'The end time must be after that start date.');
    }
  }

  const validationTitle = (title) =>{
      if(title.trim().length < 2){
        setTitleValid(false);
        return;
      }else {
        setTitleValid(true);
      }
  }

  return (
    <Modal
      isOpen={isOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="background-modal"
    >
      <h1> New event </h1>
      <hr />
      <form className="container" 
      onSubmit = {handleSubmitForm}>
        <div className="form-group">
          <label>Date and time of start event</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Date and time end event</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            minDate={dateStart}
            value={dateEnd}
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titles and notes</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Small description
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};
