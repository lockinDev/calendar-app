import React from 'react';
import {Provider} from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './components/router/AppRouter';


const CalendarApp = () =>(
    <Provider store={ store}>
        <AppRouter />
    </Provider>
    
);

export default CalendarApp; 