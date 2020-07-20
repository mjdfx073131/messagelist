const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path =require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/../build')))
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-cchdc.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const messagesRouter = require('./routes/messages');
const usersRouter = require('./routes/users');

app.use('/messages', messagesRouter);
app.use('/users', usersRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'))
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
