import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'


function Students() {
  const rows = [
    {
      name: "John",
      age: 26,
      course: "MERN",
      Batch: "October",
      change:<Link to="/students-desc/id">Edit</Link>
    },
    {
      name: "Doe",
      age: 25,
      course: "MERN",
      Batch: "November",
      change:<Link to="/students-desc/id">Edit</Link>
    },
    {
      name: "Biden",
      age: 26,
      course: "MERN",
      Batch: "September",
      change:<Link to="/students-desc/id">Edit</Link>
    },
    {
      name: "Barar",
      age: 22,
      course: "MEAN",
      Batch: "September",
      change:<Link to="/students-desc/id">Edit</Link>
    },
    {
      name: "Christ",
      age: 23,
      course: "MERN",
      Batch: "October",
      change:<Link to="/students-desc/id">Edit</Link>
    },
    {
      name: "Elent",
      age: 24,
      course: "MERN",
      Batch: "November",
      change:<Link to="/students-desc/id">Edit</Link>
    }
  ];
  return (
    <>
    <div id='heading'>
      Students Details
      <button id='btn'>Add New Student</button>
    </div>
    
    <div id='table'>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
export default Students;