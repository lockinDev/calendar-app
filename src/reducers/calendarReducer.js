import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: "Cumpleaños del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafafa", //this is a own property,
      notes: "congratulation your first note",
      user: {
        _id: "1234",
        name: "Lockin",
      },
    },
  ],
};


export const calendarReducer = (state = initialState, action) => {
    switch (action.key) {

        case types.eventSetActive:
            return{
                ...state, 
                actionEvent: action.payload
            }
    
        default:
            return state;
    }
}

