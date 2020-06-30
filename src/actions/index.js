import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_MESSAGES,
  SHOW_DETAIL,
  INITIAL_MESSAGES,
  EDIT_MESSAGE
} from "../constant";

//Action Creator

export const addMessage = (username, description, duration, date, showDetail) => {
  const action = {
    type: ADD_MESSAGE,
    username,
    description,
    duration,
    date,
    showDetail
  };
  console.log("action in add", action);
  return action;
};

export const showDetail = (id) => {
  const action = {
    type: SHOW_DETAIL,
    id,
  };
  console.log("action in detail", action);
  return action;
};

export const deleteMessage = (id) => {
  const action = {
    type: DELETE_MESSAGE,
    id,
  };
  console.log("action in remove", action);
  return action;
};

export const clearMessages = () => {
  const action = {
    type: CLEAR_MESSAGES,
  };
  console.log("action in clear", action);
  return action;
};

export const initializeMessage = (msg) => {
  const action = {
    type: INITIAL_MESSAGES,
    msg,
  };
  console.log("action in initialize", action);
  return action;
};

export const editMessage = (id, username, description, duration, date) => {
  const action = {
    type: EDIT_MESSAGE,
    id,
    username,
    description,
    duration,
    date
  }
  console.log("action in edit", action)
}
