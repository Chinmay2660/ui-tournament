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
      const response = await axios.get("http://localhost:5000/");
      const data = response.data;
      const winnerCount = { Team1: 0, Team2: 0 }; // Count winners
      data.matches.forEach((match) => {
        if (match.winner === data.team1) {
          winnerCount.Team1++;
        } else if (match.winner === data.team2) {
          winnerCount.Team2++;
        }
      });
      // Determine the overall winner
      if (winnerCount.Team1 > winnerCount.Team2) {
        setWinner(data.team1);
      } else if (winnerCount.Team1 < winnerCount.Team2) {
        setWinner(data.team2);
      } else {
        setWinner("It's a Tie"); // Handle a tie if needed
      }
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
          marginTop: "30px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Winner: {winner}
        </Typography>
        <TableContainer component={Paper} style={{ height: "100%", marginTop: "30px" }}>
          <Table size="small" aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Match</TableCell>
                <TableCell style={{ textAlign: "center" }}>Game</TableCell>
                <TableCell style={{ textAlign: "center" }}>Winner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matchData.map((match, index) => (
                <TableRow key={index}>
                  <TableCell>{match.match}</TableCell>
                  <TableCell>{match.game}</TableCell>
                  <TableCell>{match.winner}</TableCell>
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
