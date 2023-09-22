import React from "react";
// import { connect } from 'react-redux';
// import { viewMatches } from '../ReduxStore/actions/index';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ViewPage = ({ viewMatches }) => {
  return (
    <div className="view-page">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          Winner Team :
        </Typography>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          TestWinnerTeam
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Game</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {viewMatches.map((match, index) => ( // Change 'matches' to 'viewMatches'
            <tr key={index}>
              <td>{match.match}</td>
              <td>{match.game}</td>
              <td>{match.team1Player}</td>
              <td>{match.team2Player}</td>
              <td>{match.winner}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   viewMatches: state.matchReducer.viewMatches,
// });

// export default connect(mapStateToProps)(ViewPage);
export default ViewPage;
