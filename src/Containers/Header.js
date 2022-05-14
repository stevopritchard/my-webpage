import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import {
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const projListArray = [
  { name: 'JSNote', id: '#jsnote' },
  { name: 'Invoice Parser', id: '#invoiceParser' },
  { name: 'Blockchain app', id: '#blockchain' },
  { name: '¡Conjugado!', id: '#conjugado' },
  { name: 'Weather app', id: '#weather' },
  { name: 'Woofers', id: '#woofers' },
  { name: 'Smart Brain', id: '#smartBrain' },
];

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontWeight: 500,
  },
  iconButton: {
    color: (props) => (props.darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)'),
    paddingRight: 0,
    size: 'small',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        <Toolbar>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h6" className={classes.title}>
              <Button onClick={props.switchMode}>
                {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </Button>
            </Typography>
          </Grid>
          <Box />
          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={props.scrollToTop}
              className={classes.button}
              // href="/"
            >
              About Me
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.button}
            >
              Projects
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {projListArray.map((text, index) => (
                <MenuItem
                  color="inherit"
                  button
                  component={Link}
                  // href={text.id}
                  key={index}
                  onClick={() => props.scrollToProjRef(text.id)}
                >
                  {text.name}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              style={
                props.darkMode
                  ? { color: '#fff', paddingRight: 0, paddingLeft: '8px' }
                  : {
                      color: 'rgba(0, 0, 0, 0.87)',
                      paddingRight: 0,
                      paddingLeft: '8px',
                    }
              }
              href="https://github.com/stevopritchard"
            >
              <GitHub style={{ fontSize: '16px' }} />
            </IconButton>
            <IconButton
              // size="large"
              style={
                props.darkMode
                  ? { color: '#fff', paddingRight: 0, paddingLeft: '8px' }
                  : {
                      color: 'rgba(0, 0, 0, 0.87)',
                      paddingRight: 0,
                      paddingLeft: '8px',
                    }
              }
              href="https://www.linkedin.com/in/stevopritchard/"
            >
              <LinkedIn style={{ fontSize: '20px' }} />
            </IconButton>
            <IconButton
              // size="large"
              style={
                props.darkMode
                  ? { color: '#fff', paddingRight: 0, paddingLeft: '8px' }
                  : {
                      color: 'rgba(0, 0, 0, 0.87)',
                      paddingRight: 0,
                      paddingLeft: '8px',
                    }
              }
              href="mailto:stephen.a.pritchard@gmail.com"
            >
              <Mail style={{ fontSize: '20px' }} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
