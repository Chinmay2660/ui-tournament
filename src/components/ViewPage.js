import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const ViewPage = () => {
  const [winner, setWinner] = useState("Team 1");
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    handleView();
  }, []);

  const handleView = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getData");
      // setMatchData([]);
      const data = response.data;
      // console.log(data,"get data")
      setMatchData(data.matches);
    } catch (error) {
      console.error("Error fetching data from server:", error);
    }
  };

  return (
    <div className="view-page">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Winner: {winner}
        </Typography>
        <TableContainer
          component={Paper}
          style={{ height: "100%", marginTop: "30px" }}
        >
          <Table size="small" aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell
                  size="small"
                  style={{
                    minWidth: "120px",
                    width: "120px",
                    textAlign: "center",
                  }}
                >
                  Match
                </TableCell>
                <TableCell
                  size="small"
                  style={{
                    minWidth: "120px",
                    width: "120px",
                    textAlign: "center",
                  }}
                >
                  Game
                </TableCell>
                <TableCell
                  size="small"
                  style={{
                    minWidth: "120px",
                    width: "120px",
                    textAlign: "center",
                  }}
                >
                  Winner
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matchData.length > 0 &&
                matchData.map((match, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ textAlign: "center" }}>
                      {match.matchSelects.map((matchSelect, i) => (
                        <div key={i}>{matchSelect}</div>
                      ))}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {match.gameSelects.map((gameSelect, i) => (
                        <div key={i}>{gameSelect}</div>
                      ))}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {match.winnerSelects.map((winnerSelect, i) => (
                        <div key={i}>{winnerSelect}</div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ViewPage;
