import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHeader, TableHeaderColumn, TableRow, TableCell, TableHead, TableRowColumn } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, updateData } from '../../actions/data';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

const DataTable = ({ currentId, setCurrentId, header }) => {
  const [dataData, setData] = useState({ companyName: '', isinCode: '', recommendation: '', lastPrice: '', targetPrice: '' , upside: '' , country: '', industry: '', freeFloat: ''  });
  const data = useSelector((state) => state.data);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
      if (data) setData(data);
    }, [data]);

  const currentlyEditing = 1;
  
  const handleEdit = (id) => {
    dispatch(updateData(id))
  }

  const handleDelete = (id) => {
    if (window.confirm("Delete this item?")){
      dispatch(deleteData(id));
    };
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: 500 }}>
      <Table className={classes.table} aria-label="table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Isin Code</TableCell>
            <TableCell align="right">Recommendation</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">Target Price</TableCell>
            <TableCell align="right">Upside</TableCell>
            <TableCell align="right">Industry</TableCell>
            <TableCell align="right">Free Float</TableCell>
            <TableCell> </TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.companyName}
              </TableCell>
              <TableCell align="right">{row.isinCode}</TableCell>
              <TableCell align="right">{row.recommendation}</TableCell>
              <TableCell align="right">{row.lastPrice}</TableCell>
              <TableCell align="right">{row.upside}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.industry}</TableCell>
              <TableCell align="right">{row.freeFloat}</TableCell>
              <TableCell><EditIcon onClick={() => handleEdit(row._id)}/></TableCell>
              <TableCell><DeleteIcon onClick={() => handleDelete(row._id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;