import { types } from "../types/types";

export const eventAddNew = (event) => ({
    type: types.eventAddNew, 
    payload: event
});

export const eventUpdatedActive = (event) => ({
    type: types.eventUpdated, 
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive, 
    payload: event
});

export const eventClearActive = (event) => ({
    type: types.eventClearActive});