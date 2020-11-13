import React, { useState } from 'react'
import Modal from 'react-modal';


import {customStyles} from '../../helpers/calendar-modal-custom-styles';

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
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

            <h1>Modal</h1>

        </Modal>
    )
}
