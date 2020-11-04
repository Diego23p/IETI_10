import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NativeSelect from '@material-ui/core/NativeSelect';
import DoneIcon from '@material-ui/icons/Done';
import moment from "moment";
import './NewTask.css'
import axios from 'axios';

export class NewTask extends React.Component{

  constructor(props) {
    super(props);
    this.state = {description: '', responsible:'', status:'', dueDate:moment(), file:''};
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleResponsibleChange(e) {
    this.setState({
      responsible: e.target.value
    });
  }

  handleStatusChange(e) {
    this.setState({
      status: e.target.value
    });
  }

  handleDueDateChange(date) {
    this.setState({
      dueDate: date
    });
  }

  handleInputChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = new FormData();
    data.append('file', this.state.file);

    axios.post('http://localhost:8080/api/files', data)
      .then(function (response) {
        console.log("file uploaded!", response.data);
      })
      .catch(function (error) {
        console.log("failed file upload", error);
      });
  }

  render(){

    var addTask=()=>{
      var task = {
          "description":this.state.description,
          "responsible":{
            "name": this.state.responsible
          },
          "status":this.state.status,
          "dueDate":this.state.dueDate

      };
      this.props.TaskList(task);
    }

    return (
      <React.Fragment>
      <CssBaseline />
      <main className="layout">
          <Paper className="paper" elevation={5}>
              <Typography variant="h2">New Task</Typography>

              <form className="form">

                  <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="description">Description</InputLabel>
                      <Input 
                          id="description" 
                          name="description" 
                          autoComplete="description" 
                          autoFocus
                          onChange={this.handleDescriptionChange}
                          value={this.state.description} 
                      />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="responsible">Responsible</InputLabel>
                      <Input 
                          id="responsible" 
                          name="responsible" 
                          autoComplete="responsible" 
                          onChange={this.handleResponsibleChange}
                          value={this.state.responsible} 
                      />
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="demo-customized-select-native">Status</InputLabel>
                    <NativeSelect
                      id="status"
                      value={this.state.status}
                      onChange={this.handleStatusChange}
                    >
                      <option aria-label="None" value="" />
                      <option value="Ready">Ready</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <DatePicker
                      id="dueDate"
                      selected={this.state.dueDate}
                      placeholderText="Due date"
                      onChange={this.handleDueDateChange}>
                    </DatePicker>
                  </FormControl><br/><br/>

                  <input type="file" id="file" onChange={this.handleInputChange}/><br/><br/>

                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="submit"
                      onClick={this.handleSubmit} 
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
