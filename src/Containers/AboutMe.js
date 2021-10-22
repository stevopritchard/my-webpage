import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Grid, Divider, Typography, SvgIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons';
import {ReactComponent as Expressjs } from '../expressjs-icon.svg';
import {ReactComponent as Postgresql} from '../postgresql.svg';
import {ReactComponent as Mongodb} from '../mongodb.svg';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  mainArea: {
    flexGrow: 1,
    height: '100vh',
    justifyContent: 'center',
  },
  button: {
    border: '2px solid',
    borderRadius: '11px'
  }
})

function TabPanel(props) {
  const { children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function createFEData(school, html5, css3, js, react) {
  return { school, html5, css3, js, react };
}

function createBEData(school, nodejs, express, postgresql, mongodb) {
  return { school, nodejs, express, postgresql, mongodb };
}

const frontEndCourses = [
  createFEData('Complete Web Developer Course' ,'','',<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>),
  createFEData('Complete Node Developer Course','','','',''),
  createFEData('freecodecamp',<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>,'','')
]

const backEndCourses = [
  createBEData('Complete Web Developer Course' ,<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>,''),
  createBEData('Complete Node Developer Course',<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>,<CheckIcon style={{height:13, width: 13}}/>),
  createBEData('freecodecamp','','','','')
]

function FrontEndTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><FontAwesomeIcon icon={faHtml5} size='sm' /></TableCell>
          <TableCell><FontAwesomeIcon icon={faCss3} size='sm' /></TableCell>
          <TableCell><FontAwesomeIcon icon={faJs} size='sm' /></TableCell>
          <TableCell><FontAwesomeIcon icon={faReact} size='sm' /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {frontEndCourses.map((row) => (
          <TableRow
            key={row.school}
          >
            <TableCell component='th' scope='row'>
              {row.school}
            </TableCell>
            <TableCell align="right">{row.html5}</TableCell>
            <TableCell align="right">{row.css3}</TableCell>
            <TableCell align="right">{row.js}</TableCell>
            <TableCell align="right">{row.react}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function BackEndTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell><FontAwesomeIcon icon={faNodeJs} size='sm' /></TableCell>
          <TableCell><SvgIcon viewBox='0 0 70 40' style={{height:20, width: 20}}><Expressjs /></SvgIcon></TableCell>
          <TableCell><SvgIcon viewBox='0 -8 58 43' style={{height:18, width: 18}}><Postgresql /></SvgIcon></TableCell>
          <TableCell><SvgIcon viewBox='0 -5 50 40' style={{height:19, width: 19}}><Mongodb /></SvgIcon></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {backEndCourses.map((row) => (
          <TableRow
            key={row.school}
          >
            <TableCell component='th' scope='row'>
              {row.school}
            </TableCell>
            <TableCell align="right">{row.nodejs}</TableCell>
            <TableCell align="right">{row.express}</TableCell>
            <TableCell align="right">{row.postgresql}</TableCell>
            <TableCell align="right">{row.mongodb}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const Popover1 = () => {
  return (
    <Box display='flex' flexDirection='row' margin={1.8}>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding={1.5}>
        <Box>
          <Typography style={{ fontWeight: 500 }} >Front-End</Typography>
        </Box>
        <Box display='flex' flexDirection='row' style={{paddingTop: '9px'}}>
          <Box paddingLeft={2} paddingRight={1.3}>
            <FontAwesomeIcon icon={faJs} size='3x' />
          </Box>
          <Box paddingRight={1.3}>
            <FontAwesomeIcon icon={faHtml5} size='3x' />
          </Box>
          <Box paddingRight={2}>
            <FontAwesomeIcon icon={faCss3} size='3x' />
          </Box>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem/>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding={1.5}>
        <Box>
          <Typography style={{ fontWeight: 500 }} >Back-End</Typography>
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Box paddingLeft={2} paddingRight={0.6} marginTop={-0.2}>
            <SvgIcon viewBox='0 10 70 40' style={{height:50, width: 50}}>
              <Expressjs/>
            </SvgIcon>
          </Box>
          <Box  marginBottom={-0.9}>
            <SvgIcon viewBox='5 0 50 40' style={{height:50, width: 50}}>
              <Postgresql />
            </SvgIcon>
          </Box>
          <Box>
            <SvgIcon viewBox='8 -2 35 45' style={{height:50, width: 36}}>
              <Mongodb />
            </SvgIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Popover2 = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  }
  
  return (
    <Box>
      <Box>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="simple table" centered={true}>
          <Tab style={{ fontWeight: 500 }} label="Front-End" {...a11yProps(0)} />
          <Tab style={{ fontWeight: 500 }} label="Back-End" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel 
        value={activeTab}
        index={0}
      >
        <FrontEndTable />
      </TabPanel>
      <TabPanel 
        value={activeTab}
        index={1}
      >
        <BackEndTable />
      </TabPanel>
    </Box>
  )
}

export default function AboutMe() {
    const [anchorEl1, setAnchorEl1] = React.useState({
      anchorEl: null,
      child: <Popover1 />
    })

    const [anchorEl2, setAnchorEl2] = React.useState({
      anchorEl: null,
      child: <Popover2 />
    })


    const handleClick1 = (event) => {
      setAnchorEl1({...anchorEl1, anchorEl:event.currentTarget});
    }

    const handleClick2 = (event) => {
      setAnchorEl2({...anchorEl2, anchorEl:event.currentTarget});
    }

    const open1 = Boolean(anchorEl1.anchorEl);
    const id1 = open1 ? 'skills-popover' : undefined;

    const open2 = Boolean(anchorEl2.anchorEl);
    const id2 = open2 ? 'courses-popover' : undefined;

    const classes = useStyles();
    return (
      <Container className={classes.mainArea} disableGutters fixed>
        <Box  display='flex' flexDirection='row' justifyContent='center' paddingTop='2em' paddingBottom='2em'>
            <Typography variant="h2" align='center' style={{fontWeight: 600}}>Stephen Pritchard</Typography>
        </Box>
        <Typography variant="body1" align='center'>
          An aspiring full stack developer looking for a new challenge! {<br/>}
        </Typography>
        <Typography variant="body1" align='justify'>
          I have been learning to code alongside my current job in retail finance and have taken on several freelance 
          projects over the past couple of years with a view to making the leap into a full-time role.
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-around' paddingTop='30px'>
          <Box display='flex' flexDirection='column' alignItems="center">
            <FontAwesomeIcon icon={faReact} size='5x' />
            <Typography variant="h5" style={{fontWeight: 'bold'}}>React</Typography>
          </Box>
          <Box display='flex' flexDirection='column' alignItems="center">
            <FontAwesomeIcon icon={faNodeJs} size='5x' />
            <Typography variant="h5" style={{fontWeight: 'bold'}}>Node.js</Typography>
          </Box>
        </Box>
        <Box paddingTop='3em' display='flex' flexWrap='wrap' flexDirection='row' justifyContent='space-around'>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6} md={6} style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              aria-describedby={id1}
              className={classes.button}
              onClick={handleClick1}
              variant="outlined"
            >
              <Typography style={{fontSize:'0.7em', fontWeight: 500}}>See the rest of my skills...</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              aria-describedby={id2}
              className={classes.button}
              onClick={handleClick2}
              variant="outlined"
            >
              <Typography style={{fontSize:'0.7em', fontWeight: 500}}>...and where I got them.</Typography>
            </Button>
          </Grid>
            <Popover
              id={id1}
              open={open1}
              anchorEl={anchorEl1.anchorEl}
              onClose={() => setAnchorEl1({ ...anchorEl1, anchorEl: null})}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
              {anchorEl1.child}
            </Popover>

            <Popover
              id={id2}
              open={open2}
              anchorEl={anchorEl2.anchorEl}
              onClose={() => setAnchorEl2({ ...anchorEl2, anchorEl: null})}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
              {anchorEl2.child}
            </Popover>
        </Grid>
        </Box>
      </Container>
    )
};