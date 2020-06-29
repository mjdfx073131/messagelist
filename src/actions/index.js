import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    CLEAR_MESSAGES,
    SHOW_DETAIL,
  } from "../constant";
  
  //Action Creator
  
  export const addMessage = (text, dueDate, showDetail) => {
    const action = {
      type: ADD_MESSAGE,
      payload: {
        text,
        dueDate,
        showDetail,
      } 
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
  