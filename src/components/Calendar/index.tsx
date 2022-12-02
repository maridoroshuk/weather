import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import initializeGapiClient from '@utils/initializeGapiClient';
import { getEventsRequest, setIsLoggedInd } from '@store/features/calendar/calendarSlice';
import getTokenClient from '@utils/getTokenClient';
import { IEvent } from '@customTypes/events';
import Events from './Events';
import Login from './Login';

const { gapi } = window;

function Calendar() {
  const dispatch = useDispatch();
  const tokenClient = getTokenClient();

  const { events, isLoggedIn } = useSelector(
    (state: {
      calendar: {
        events: IEvent[] | null;
        isLoggedIn: boolean;
      };
    }) => state.calendar,
  );

  useEffect(() => {
    gapi.load('client', initializeGapiClient);
  }, []);

  const handleAuthClick = () => {
    const token = gapi.client.getToken();

    tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      dispatch(setIsLoggedInd());
      dispatch(getEventsRequest());
    };

    if (token === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  return (
    <>
      {!isLoggedIn && <Login onLogin={handleAuthClick} />}
      {events && <Events events={events} />}
    </>
  );
}
export default Calendar;
