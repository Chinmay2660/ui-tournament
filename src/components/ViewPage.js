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
      const response = await axios.get("/api/scores");
      const data = response.data;
      setWinner(data.winner);
      setMatchData(data.matches);
    } catch (error) {
      console.error("Error fetching data from server:", error);
    }
  };

  const displayedMatchData = matchData.slice(0, 5);

  return (
    <div className="view-page">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"30px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Winner: {winner}
        </Typography>
          <TableContainer  component={Paper} style={{ height: "100%", marginTop:"30px"}} >
            <Table size="small" aria-label="customized table">
              <TableHead >
                <TableRow >
                  <TableCell style={{ textAlign: "center"}}>Match</TableCell>
                  <TableCell style={{ textAlign: "center"}}>Game</TableCell>
                  <TableCell style={{ textAlign: "center"}}>Winner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedMatchData.map((match, index) => (
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
