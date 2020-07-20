import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {connect} from "react-redux";
import { deleteMessage,showDetail} from "../actions/";



class MessageItem extends Component {
  constructor(props){
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.getAge = this.getAge.bind(this);
    this.state = {age: 0}
  }
  deleteMessage(id) {
    axios.delete('https://quiet-mountain-30375.herokuapp.com/messages/'+id)
      .then(response => { console.log(response.data)}).then(this.props.deleteMessage(id));
  }
  getAge(message,username) {
    axios.get('https://quiet-mountain-30375.herokuapp.com/users/' + username)
      .then(response => {
        this.setState({
          age: response.data[0].age
        })
        //console.log(response.data[0].age)
      }).then(this.props.showDetail(message._id))
      .catch((error) => {
        console.log(error);
      })
  }
    render() {
        const {message} = this.props;
        //console.log(message);
        return (<tr>
            <td onClick = {() => {this.getAge(message, message.username)}}>{message.username}</td>
            <td>{message.showDetail && this.state.age}</td>
            <td>{message.description}</td>
            <td>{message.date.substring(0,10)}</td>
            <td>
              <Link to={"/edit/"+message._id}>edit</Link> | <a href="#" onClick={() => { this.deleteMessage(message._id)}}>delete</a>
            </td>
          </tr>);
        
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
showDetail
})(MessageItem);
