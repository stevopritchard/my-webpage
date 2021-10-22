import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    margin: '0 auto',
    height: 120,
    // paddingTop: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  upperNavigation:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  extLinks:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default function Footer() {

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Container className={classes.upperNavigation}>
                <Button href='/'  aria-controls="simple-menu" aria-haspopup="true">
                    About Me
                </Button>
                <Button href='/projects' aria-controls="simple-menu" aria-haspopup="true">
                    Projects
                </Button>
            </Container>
            <Divider style={{width:'100%'}} />
            <BottomNavigation className={classes.extLinks}>
                <BottomNavigationAction 
                    showLabel={true}
                    label={<span className="bottomNavLabel">GitHub</span>} 
                    icon={<GitHub/>} 
                />
                <BottomNavigationAction 
                    showLabel={true}
                    label={<span className="bottomNavLabel">LinkedIn</span>}  
                    icon={<LinkedIn/>} 
                />
            </BottomNavigation>
        </div>
    )
}