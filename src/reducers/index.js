import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_MESSAGES,
  SHOW_DETAIL,
  INITIAL_MESSAGES,
} from "../constant";
import { bake_cookie, read_cookie } from "sfcookies";

const message = (action) => {
  let { username,
    description,
    duration,
    date,showDetail } = action;
  console.log("dddd", action);
  console.log("dddd", username);
  console.log("dddd", description);
  console.log("dddd", duration);
  console.log("dddd", date);
  return {
    username,
    description,
    duration,
    date,
    showDetail
  };
};

const deleteById = (state = [], id) => {
  console.log("ID", id);
  const messages = state.filter((message) => message._id !== id);
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
    if (messag._id === id) {
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
  //state = read_cookie("messages");
  switch (action.type) {
    case INITIAL_MESSAGES:
      if (!action.msg) {
        return state;
      } else {
        return action.msg;
      }
    case ADD_MESSAGE:
      console.log("messages as state!!!!!!!!!!!!!!!!!!!!!!!", messages);
      messages = [...state, message(action)];
      console.log("messages as state", messages);
      //bake_cookie("messages", messages);
      return messages;
    case DELETE_MESSAGE:
      console.log("del ddd");
      messages = deleteById(state, action.id);
      //bake_cookie("messages", messages);
      return messages;
    case SHOW_DETAIL:
      console.log("show details");
      messages = showDetailById(state, action.id);
      //bake_cookie("messages", messages);
      return messages;
    case CLEAR_MESSAGES:
      messages = [];
      //bake_cookie("messages", messages);
      return messages;
    default:
      return state;
  }
};

export default messages;
