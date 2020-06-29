import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Message = props => (
  <tr>
    <td>{props.message.username}</td>
    <td>{props.message.description}</td>
    <td>{props.message.duration}</td>
    <td>{props.message.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.message._id}>edit</Link> | <a href="#" onClick={() => { props.deleteMessage(props.message._id) }}>delete</a>
    </td>
  </tr>
)

export default class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.deleteMessage = this.deleteMessage.bind(this)

    this.state = {messages: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/messages/')
      .then(response => {
        this.setState({ messages: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMessage(id) {
    axios.delete('http://localhost:5000/messages/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      messages: this.state.messages.filter(el => el._id !== id)
    })
  }

  messageList() {
    return this.state.messages.map(currentMessage => {
      return <Message message={currentMessage} deleteMessage={this.deleteMessage} key={currentMessage._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Messages</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.messageList() }
          </tbody>
        </table>
      </div>
    )
  }
}