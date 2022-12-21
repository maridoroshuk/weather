import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEventsRequest,
  setApiCalendar,
  setIsLoggedIn,
} from '@store/features/calendarSlice';
import { selectApiCalendar } from '@store/selectors/calendar';
import getApiCalendar from '@utils/getApiCalendar';

function useCalendar() {
  const dispatch = useDispatch();
  const apiCalendar = useSelector(selectApiCalendar);

  useEffect(() => {
    dispatch(
      setApiCalendar({ apiCalendar: getApiCalendar() }),
    );
  }, []);

  const handleLogin = () => {
    apiCalendar.handleAuthClick();
    apiCalendar.tokenClient.callback = async (resp: {
      error: string | undefined;
    }) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
      dispatch(getEventsRequest());
    };
  };

  const handleLogout = () => {
    apiCalendar.handleSignoutClick();
    dispatch(setIsLoggedIn({ isLoggedIn: false }));
  };

  return {
    handleLogin,
    handleLogout,
  };
}

export default useCalendar;
