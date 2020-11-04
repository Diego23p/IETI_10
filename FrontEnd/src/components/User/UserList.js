import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export class UserList extends React.Component {

  constructor(props) {

    super(props);
  }

  render() { 

    console.log("En userrrr")

    const userList = this.props.usersList.map((user, i) => {
      console.log(user)
      return (
        <Card className="root">
            <CardContent>
              <Typography className="title" component="h2">
                Email: {user.email}
              </Typography>

              <Typography className="title" component="h2">
                Full Name: {user.fullName}
              </Typography>

              <Typography className="title" component="h2">
                Password: {user.password}
              </Typography>

            </CardContent>
        </Card>

      );
    });


    return (
      <div>
        {userList}
      </div>
    );

  }

}

export default UserList;