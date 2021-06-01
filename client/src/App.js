import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import ImportField from './components/ImportField/ImportField';
import DataTable from './components/DataTable/DataTable';
import { getData } from './actions/data';
import useStyles from './styles';
import logo from './images/logo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getData());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={logo} alt="icon" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">CSV Importer</Typography>
      </AppBar>
      <Container>
        <ImportField currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
      <Container>
        <DataTable currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </Container>
  );
};

export default App;
