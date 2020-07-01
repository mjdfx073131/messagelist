import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteMessage, clearMessages, initializeMessage } from "../actions/";
import MessageItem from "./MessageItem";

const fetchInitialMessage = async () => {
  try {
    const retrievedMessages = await fetch('http://localhost:5000/messages');
    console.log(retrievedMessages);
    return (await retrievedMessages.json());

  }catch(err) {
    console.error('===\n ERROR fetchInitialMessageArray \n===');
  }
};


class MessagesList extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.deleteMessageAll = this.deleteMessageAll.bind(this);

    this.state = { messages: [] };
  }

  async componentDidMount() {
    
    axios
      .get("http://localhost:5000/messages/")
      .then((response) => {
        this.setState({ messages: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    
      let initialAry = await fetchInitialMessage();
      this.props.initializeMessage(initialAry);
  }
  deleteMessageAll() {
    axios
      .delete("http://localhost:5000/messages/").then(response => { console.log(response.data)})
      .then(this.props.clearMessages())
      .catch((error) => {
        console.log(error);
      });
  }

  messageList() {
    const { messages } = this.props;
    console.log("messages", messages);
    return messages.map((currentMessage) => {
      return (
        <MessageItem
          message={currentMessage}
          key={currentMessage._id}
        />
      );
    });
    // return this.state.messages.map(currentMessage => {
    //   return <MessageItem message={currentMessage} deleteMessage={this.props.deleteMessage} key={currentMessage._id}/>;
    // })
  }

  render() {
    //console.log("props", this.props);
    // console.log("state", this.state);
    return (
      <div>
        <h3>Messages</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.messageList()}</tbody>
        </table>
        <div
            className="btn btn-warning btn-lg"
            onClick={() => this.deleteMessageAll()}
          >
            Clear
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    //console.log ("mapStatetoProps", state);
    return {
      messages: state,
    };
  };

export default connect(mapStateToProps, {
  deleteMessage,
  clearMessages,
  initializeMessage
})(MessagesList);
