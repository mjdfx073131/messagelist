import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    CLEAR_MESSAGES,
    SHOW_DETAIL,
  } from "../constant";
  import { bake_cookie, read_cookie } from "sfcookies";
  
  const message = (action) => {
    let { text, dueDate, showDetail } = action;
    console.log("dddd", action);
    console.log("dddd", text);
    console.log("dddd", dueDate);
    console.log("dddd", showDetail);
    return {
      text,
      id: Math.random(),
      dueDate,
      showDetail,
    };
  };
  
  const deleteById = (state = [], id) => {
    console.log("ID", id);
    const messages = state.filter((message) => message.id !== id);
    console.log("state", messages);
    console.log(messages);
    return messages;
  };
  
  const showDetailById = (state = [], id) => {
    console.log("Before", state);
    console.log("ID", id);
    //   const messages = state.forEach((message) => {
    //     if (message.id === id) {
    //       message.showDetail = true;
    //     }
    //   });
    for (let messag of state) {
      if (messag.id === id) {
        messag.showDetail = !messag.showDetail;
      }
    }
    //const messages = state.filter((message) => message.id === id);
    const messages = state;
    console.log("After", messages);
    return messages;
  };
  
  const messages = (state = [], action) => {
    let messages = null;
    state = read_cookie("messages");
    switch (action.type) {
      case ADD_MESSAGE:
        messages = [...state, message(action)];
        console.log("messages as state", messages);
        bake_cookie("messages", messages);
        return messages;
      case DELETE_MESSAGE:
        console.log("del ddd");
        messages = deleteById(state, action.id);
        bake_cookie("messages", messages);
        return messages;
      case SHOW_DETAIL:
        console.log("show details");
        messages = showDetailById(state, action.id);
        bake_cookie("messages", messages);
        return messages;
      case CLEAR_MESSAGES:
        messages = [];
        bake_cookie("messages", messages);
        return messages;
      default:
        return state;
    }
  };
  
  export default messages;
  