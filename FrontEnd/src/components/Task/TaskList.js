import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import StorageIcon from '@material-ui/icons/Storage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import FilterListIcon from '@material-ui/icons/FilterList';
import Modal from '@material-ui/core/Modal';
import {NewTask} from "./NewTask";
import {UserProfile} from "../UserProfile";
import {Filtering} from "../Filtering";
import {Task} from "./Task";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [openModalUser, setOpenModalUser] = React.useState(false);
    const [openModalFilter, setOpenModalFilter] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

    const handleOpenModal = () => {
      componentDidMount();
      setOpenModal(true);
    };

    const handleCloseModal = () => {
      setOpenModal(false);
    };

    const handleOpenModalUser = () => {
      setOpenModalUser(true);
    };

    const handleCloseModalUser = () => {
      setOpenModalUser(false);
    };

    const handleOpenModalFilter = () => {
      setOpenModalFilter(true);
    };

    const handleCloseModalFilter = () => {
      setOpenModalFilter(false);
    };

    const [TaskList,setTaskList] = React.useState([
      {
        "description": "Hacer la DBBBB",
        "responsible": "Catalina",
        "status": "Ready",
        "dueDate": 1600931924221,
        "imageURL": ""
      },
      {
        "description": "Implementar FrontEnd",
        "responsible": "Catalina",
        "status": "Done",
        "dueDate": 1609031924221,
        "imageURL":""
      }
    ]);

    const [Usuario,setUsuario] = React.useState([
      {
        "fullName": "Catalina",
        "email": "Catalina@escuelaing"
      }
    ]);

    const [Filters,setFilters] = React.useState([
      {
        "responsible":"",
        "status":"",
        "dueDate":""
      }
    ]);

    const addTask = ()=>{
      setOpenModal(false);
    }

    const componentDidMount = () => {

      fetch('http://localhost:8080/api/todo')
          .then(response => response.json())
          .then(data => {
              let usersList = [];
              data.map((user) => {
                  usersList.push({
                    "description":user.description,
                    "responsible":user.responsible,
                    "status":user.status,
                    "dueDate":user.dueDate,
                    "imageURL":user.imageURL
                  })
               });
               setTaskList(usersList);
          });

    }

    const setUser = (user)=>{
      Usuario.pop();
      Usuario.push(user);
      setUsuario(Usuario);
      setOpenModalUser(false);
    }

    const setFilter = (filter)=>{
      Filters.pop();
      Filters.push(filter);
      setFilters(Filters);
      setOpenModalFilter(false);
    }

    return (
        <Router>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            User
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </div>

                    <Divider /><Divider />

                    <List>
                        <ListItem key="Catalina" >
                            <ListItemIcon >
                                <PersonOutlineIcon />
                            </ListItemIcon>
                            {Usuario[0].fullName}
                            <br></br>
                            {Usuario[0].email}
                        </ListItem>

                        <div>
                          <Button color="primary" aria-label="add" className="addRight" onClick={handleOpenModalUser}>
                            <HowToRegIcon/> Registration
                          </Button>
                          <Modal
                            open={openModalUser}
                            onClose={handleCloseModalUser}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            <UserProfile user={(user)=>setUser(user)} />
                          </Modal>
                        </div>

                        <br></br><br></br>

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            href="/" >
                            Sign Out
                        </Button>
                    </List>
                    
                </Drawer>

                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                  <div className={classes.drawerHeader} />

                    <Typography variant="h4">
                      Add New Task
                    </Typography>

                    <div>
                      <Fab color="primary" aria-label="add" className="addRight" onClick={handleOpenModal}>
                        <AddIcon/>
                      </Fab>
                      <Modal
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        <NewTask TaskList={(task)=>addTask(task)} />
                      </Modal>
                    </div>
                    <br/><br/>

                    <Divider /><Divider />

                    <Task taskList={TaskList} filter={Filters}/>

                    <div>
                      <Button color="primary" aria-label="add" className="addRight" onClick={handleOpenModalFilter}>
                        <FilterListIcon/> Filters
                      </Button>
                      <Modal
                        open={openModalFilter}
                        onClose={handleCloseModalFilter}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        <Filtering filtros={(filtros)=>setFilter(filtros)} />
                      </Modal>
                    </div>

                </main>
            </div>
        </Router>
    );
}





