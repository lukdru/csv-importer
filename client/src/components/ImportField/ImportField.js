import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSVReader } from 'react-papaparse';

import useStyles from './styles';
import { importData, getData } from '../../actions/data';

const ImportField = ({ currentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnDrop = (data) => {
    dispatch(importData(data));
    window.location.reload(false);
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  useEffect(() => {
    dispatch(getData());
  }, [currentId, dispatch]);

  return (
    <div className={classes.div}>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        config={{
          delimiter: ";",
          header: true, 
          dynamicTyping: true,
          transformHeader:function(h) {
            return h.trim();
          }}}
        removeButtonColor='#659cef'
        >
        <span className={classes.span}>
          <p className={classes.p}>Drop CSV file here or click to upload.</p>
        </span>
      </CSVReader>
    </div>
  );
};

export default ImportField;