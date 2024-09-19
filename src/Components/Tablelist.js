import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteEmployee, updateEmployee } from "../redux/employeeSlice";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "hsl(210,77%,46%)",
    color: theme.palette.common.white,
    border: "1px solid rgba(224, 224, 224, 1)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid rgba(224, 224, 224, 1)",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
}));

const descriptionLength = (description) => {
  return description.length >= 20
    ? description.substring(0, 20) + "..."
    : description;
};

export default function Tablelist({ setOpen,setEditData }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee.employee);
  console.log("----data", data);

  const handleDelete = (deletedId) => {
    //  console.log('----deleted',deletedId)
    dispatch(deleteEmployee(deletedId));
  };

  const handleEdit = (rowData) => {
    setOpen(true);
    setEditData(rowData)
    dispatch(updateEmployee(rowData))
    console.log("editedid-->", rowData);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">EmployeeId</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Salary</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.employeeid}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.fullName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.department}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {descriptionLength(row.description)}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.salary}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="outlined"
                      sx={{ mr: 3 }}
                      onClick={() => handleEdit(row)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ color: "red" }}
                      onClick={() => handleDelete(row.employeeid)}
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
