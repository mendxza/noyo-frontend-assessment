import {
  SET_USERS,
  SET_SELECTED_USER,
  GET_EVENTS,
  CLEAR_EVENTS,
  SELECT_ITEM,
  COMPARE_EVENTS,
  RESET_USER,
} from './constants';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

// sets selected user and gets non-deleted address information
export const setSelectedUser = (userId) => {
  return (dispatch) => {
    fetch(`/users/${userId}/addresses`)
      .then((resp) => resp.json())
      .then((addresses) => {
        const addressArray = addresses.reduce((arr, address) => {
          if (!address.deleted) arr.push({ ...address, selected: false });
          return arr;
        }, []);
        dispatch({
          type: SET_SELECTED_USER,
          payload: { userId, addressArray },
        });
      });
  };
};

export const getEvents = (addressId) => {
  return (dispatch) => {
    fetch(`/addresses/${addressId}/events`)
      .then((resp) => resp.json())
      .then((addresses) => {
        const addressArr = addresses.map((address) => ({
          ...address,
          selected: false,
        }));
        dispatch({
          type: GET_EVENTS,
          payload: addressArr,
        });
      });
  };
};
export const clearEvents = () => {
  return {
    type: CLEAR_EVENTS,
  };
};

// gets all selected events URL change and change detail via payload
export const compareEvents = (events) => {
  return async (dispatch) => {
    const selectedEvents = events.reduce(
      (obj, event) => {
        if (event.selected) {
          obj.fetchUrL.push(fetch(event.url).then((resp) => resp.json()));
          obj.changeDetail.push(event.payload);
        }
        return obj;
      },
      { fetchUrL: [], changeDetail: [] }
    );

    const eventChanges = await Promise.all(selectedEvents.fetchUrL);
    const { changeDetail } = selectedEvents;
    dispatch({
      type: COMPARE_EVENTS,
      payload: { eventChanges, changeDetail },
    });
  };
};

export const selectItem = (item) => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
