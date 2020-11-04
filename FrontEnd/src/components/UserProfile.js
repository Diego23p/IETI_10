import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import 'react-datepicker/dist/react-datepicker.css';
import DoneIcon from '@material-ui/icons/Done';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Task/NewTask.css'

export class UserProfile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {fullName: '', email:''};
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
}

handleFullNameChange(e) {
    this.setState({
      fullName: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  render(){

    var setUser=()=>{
      var user = {
          "fullName":this.state.fullName,
          "email":this.state.email

      };
      this.props.user(user);
    }

    return (
      <React.Fragment>
      <CssBaseline />
      <main className="layout">
          <Paper className="paper" elevation={5}>
              <Typography variant="h2">Registration</Typography>

              <PersonOutlineIcon />

              <form className="form">

                  <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="FullName">Full Name</InputLabel>
                      <Input 
                          id="FullName" 
                          name="FullName" 
                          autoComplete="FullName" 
                          autoFocus
                          onChange={this.handleFullNameChange}
                          value={this.state.fullName} 
                      />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Input 
                          id="email" 
                          name="email" 
                          autoComplete="email" 
                          onChange={this.handleEmailChange}
                          value={this.state.email} 
                      />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                     <Input
                         name="password"
                         type="password"
                         id="password"
                         autoComplete="current-password"
                     />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                     <InputLabel htmlFor="password">Confirm Password</InputLabel>
                     <Input
                         name="password"
                         type="password"
                         id="password"
                         autoComplete="current-password"
                     />
                 </FormControl>

                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="submit"
                      onClick={(e)=>setUser()} 
                      >
                      <DoneIcon/>
                      Añadir
                  </Button>
              </form>
          </Paper>
      </main>
    </React.Fragment>
    );
  }  
}
