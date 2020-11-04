import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login/Login";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import "./App.css";
import TaskList from './components/Task/TaskList';
import UserList from './components/User/UserList';
import {NewTask} from './components/Task/NewTask';
import Typography from '@material-ui/core/Typography';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:false,
            userList: []
        };
    }

    componentDidMount() {
        fetch('https://serene-castle-82142.herokuapp.com/user')
            .then(response => response.json())
            .then(data => {
                let usersList = [];
                data.map((user) => {
                    usersList.push({
                        email:user.email,
                        fullName:user.fullName,
                        password: user.password
                    })

                });
                this.setState({userList: usersList});
            });
    }

    render() {

        const LoginView = () => {
            return <Login/>
        };

        const TaskListView = () => {
            if (localStorage.getItem("Token") == null){
                return <Redirect to="/" />
            }
            return <TaskList/>
        };

        const NewTaskView = () => {
            return <NewTask/>
        };

        return (
            <Router>
                <div className="App" onLoad={this.setUser}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={LoginView}/>
                            <Route path="/taskList" component={TaskListView}/>
                            <Route path="/NewTask" component={NewTaskView}/>
                        </Switch>

                        <br></br>
                        
                        <Typography variant="h4">Users from DataBase:</Typography>

                        <div>
                            <UserList usersList={this.state.userList}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;