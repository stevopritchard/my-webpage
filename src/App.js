import React, { useRef } from 'react';
import Header from './Containers/Header';
import AboutMe from './Containers/AboutMe';
import Projects from './Components/Projects';
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { polyfill } from 'seamless-scroll-polyfill';
import { elementScrollIntoView } from 'seamless-scroll-polyfill';

polyfill();

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const switchMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  var paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      type: paletteType,
    },
    typography: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 300,
      fontWeightMedium: 300,
      fontWeightBold: 300,
    },
  });

  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles({
    root: {
      justifyContent: 'center',
    },
  });

  const projRef = useRef([]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  function scrollToProjRef(target) {
    elementScrollIntoView(document.querySelector(target), {
      behavior: 'smooth',
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header
          // style={{paddingLeft: '16px', paddingRight: '16px',}}
          switchMode={switchMode}
          darkMode={darkMode}
          scrollToTop={scrollToTop}
          scrollToProjRef={scrollToProjRef}
        />
        <Container style={{ paddingTop: '70px' }}>
          <AboutMe />
          <Projects projRef={projRef} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
