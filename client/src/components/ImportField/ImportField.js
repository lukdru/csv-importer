import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CSVReader } from 'react-papaparse';

import useStyles from './styles';
import { importData, getData } from '../../actions/data';

const ImportField = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOnDrop = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------')
    dispatch(importData(data));
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
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
        onRemoveFile={handleOnRemoveFile}
        >
        <span className={classes.span}>
          <p className={classes.p}>Drop CSV file here or click to upload.</p>
        </span>
        </CSVReader>
    </div>
  );
};

export default ImportField;
