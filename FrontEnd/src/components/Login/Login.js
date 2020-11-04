import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import logoTask from "./logoTask.png";

import axios from 'axios';


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {user: "", password: ""};
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserChange(e) {
        this.setState({
            user: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    componentDidMount() {

        axios.post('http://localhost:8080/user/login', {
             username: 'xyz',
             password: 'password'
         })
             .then(function (response) {
                 console.log(response.data);
                 localStorage.setItem('Token', response.data.accessToken);
                 alert("Cargó token correctamente");
             })
             .catch(function (error) {
                 console.log(error);
                 alert("No cargó token correctamente");
             });

    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h2">Task Planner</Typography>
                        <img src={logoTask} className="App" />

                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    autoComplete="email" 
                                    autoFocus
                                    onChange={this.handleUserChange}
                                    value={this.state.user} 
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                    value={this.state.password}
                                />
                            </FormControl>

                            <Button
                                onClick={this.componentDidMount}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                href="/taskList" >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}