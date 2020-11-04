import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var firebase = require("firebase/app");

var firebaseConfig = {
    apiKey: "AIzaSyAWJT_qz81MTW9lnB7RJ-XwwVAhY1zd6mc",
    authDomain: "taks-planner-app-bd359.firebaseapp.com",
    databaseURL: "https://taks-planner-app-bd359.firebaseio.com",
    projectId: "taks-planner-app-bd359",
    storageBucket: "taks-planner-app-bd359.appspot.com",
    appID: "1:279326027505:web:c5133501d9181f3597c350",
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App/>, document.getElementById('root'));

