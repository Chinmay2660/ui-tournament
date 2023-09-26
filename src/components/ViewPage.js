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
  const [winner, setWinner] = useState("");
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    handleView();
  }, []);

  const handleView = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getData");
      let team1Count = 0;
      let team2Count = 0;
      const data = response.data;

      data.matches[0].matches.forEach((e) => {
        if (e.winnerSelects.split(" ")[1] === "1") {
          team1Count += 1;
        } else {
          team2Count += 1;
        }
      });
      if (team1Count > team2Count) {
        setWinner("Team 1 - " + data.matches[0].team1);
      } else {
        setWinner("Team 2 - " + data.matches[0].team2);
      }

      setMatchData(data.matches[0].matches);
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
          Winner : {winner}
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
                      {match.matchSelects}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {match.gameSelects}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {match.winnerSelects}
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
