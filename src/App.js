import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import MessagesList from "./components/messages-list.component";
import EditMessage from "./components/edit-message.component";
import CreateMessage from "./components/create-message.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={MessagesList} />
      <Route path="/edit/:id" component={EditMessage} />
      <Route path="/create" component={CreateMessage} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
