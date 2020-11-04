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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NativeSelect from '@material-ui/core/NativeSelect';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import moment from "moment";
import './Task/NewTask.css'

export class Filtering extends React.Component{

  constructor(props) {
    super(props);
    this.state = {responsible:'', status:'', dueDate:""};
    this.handleResponsibleChange = this.handleResponsibleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
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

  render(){

    var setFilters=()=>{
      var Filters = {
          "responsible":this.state.responsible,
          "status":this.state.status,
          "dueDate":this.state.dueDate
      };
      this.props.filtros(Filters);
    }

    return (
      <React.Fragment>
      <CssBaseline />
      <main className="layout">
          <Paper className="paper" elevation={5}>
              <Typography variant="h2">Task Filter</Typography>

              <PersonOutlineIcon />

              <form className="form">

              <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="responsible">Responsible</InputLabel>
                    <NativeSelect
                      id="responsible"
                      value={this.state.responsible}
                      onChange={this.handleResponsibleChange}
                    >
                      <option aria-label="None" value="" />
                      <option value="Catalina">Catalina</option>
                      <option value="Juan">Juan</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="status">Status</InputLabel>
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
                  </FormControl>

                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="submit"
                      onClick={(e)=>setFilters()} 
                      >
                      <DoneIcon/>
                      Apply
                  </Button>
              </form>
          </Paper>
      </main>
    </React.Fragment>
    );
  }  
}
