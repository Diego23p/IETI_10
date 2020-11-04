import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import "./task.css";

export class Task extends React.Component {

    constructor(props) {
        super(props);
    }

    Open(e, url) {
        
        e.preventDefault();
        window.open(url, "_blank");
    
      }

    render() {          
        const bull = <span className="bullet">•</span>;
        const taskList = this.props.taskList.map((task, i) => {
            console.log(task)

            var a = task.responsible.name == this.props.filter[0].responsible;
            var b = this.props.filter[0].responsible == "";

            var c = task.status == this.props.filter[0].status;
            var q = this.props.filter[0].status == "";

            var d = task.dueDate;
            d = new Date(d - 3000000);
            var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString());

            var d2 = this.props.filter[0].dueDate;
            d2 = new Date(d2 - 3000000);
            var date_format_str2 = d2.getFullYear().toString()+"-"+((d2.getMonth()+1).toString().length==2?(d2.getMonth()+1).toString():"0"+(d2.getMonth()+1).toString())+"-"+((d2.getDate()+1).toString().length==2?(d2.getDate()+1).toString():"0"+d2.getDate().toString());

            var e = date_format_str == date_format_str2;
            var f = this.props.filter[0].dueDate == "";

            var URLTemp = task.imageURL;

            if ( (a | b) & (c|q) & (e|f) ) {

            return (
                <Card className="root">
                    <CardContent>

                        <Typography variant="body2" component="p">
                            {URLTemp.substr(-3,3) === "pdf" ? 
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className="submitt"
                                    onClick={(e) => this.Open(e,task.imageURL)} 
                                    >
                                    <PictureAsPdfIcon/>
                                    Open new PDF tap file
                                </Button>
                            : <img src={task.imageURL} />}
                        </Typography>

                        

                        <Typography variant="h5" gutterBottom>
                            {task.description}
                        </Typography>

                        <Typography className="title" component="h2">
                            User: {task.responsible}
                        </Typography>

                        <Typography className="pos" color="textSecondary">
                            Status:{task.status}
                        </Typography>

                        <Typography variant="body2" component="p">
                            Date: {task.dueDate}
                        </Typography>
                    </CardContent>
                </Card>
            );
            }
        });

        return (
            <div>
                {taskList}
            </div>
        );
    }

}