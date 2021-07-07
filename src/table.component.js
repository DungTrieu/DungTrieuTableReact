import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import { useState } from 'react';
import { CheckBox } from '@material-ui/icons';


const TableComponent = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  // const [checked,setChecked] = useState(true)
  // const [checked1,setChecked1] = useState(true)
  // const [idCheck,setIdCheck] = useState([])
  // const [index,setIndex] = useState(0)
  
  // const handleIdCheck = (props) => {
  //   setIdCheck(prevIdCheck => [...prevIdCheck,props])
  // }
  // const handleCheck = (e) => {
  //   setChecked(e.target.checked)
  // }
  // const handleIndex = (index) => {
  //   setIndex(index)
  // }


  const handleCheck1 = (row) => {
    console.log(row)
  }

  const createData = (id, name , email, group, customer) => {
    return { id, name , email, group, customer };
  }

  const rows = [
    createData('1', 'A', 'a@gmail.com', 'Ax', '4.0'),
    createData('2', 'B', 'a@gmail.com', 'Bx', '4.3'),
    createData('3', 'C', 'a@gmail.com', 'Cx', '6.0'),
    createData('4', 'D', 'a@gmail.com', 'Dx', '4.3'),
    createData('5', 'E', 'a@gmail.com', 'Ex', '3.9'),
  ];

  const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                {/* <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                /> */}
              </TableCell>
              <TableCell align="center">ID </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Group</TableCell>
              <TableCell align="center">Customer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <Checkbox
                    onChange={handleCheck1.bind(this,row)}
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.group}</TableCell>
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.value}</TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TableComponent
