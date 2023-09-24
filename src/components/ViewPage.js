import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

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

  return (
    <div className="view-page">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          Winner: {winner}
        </Typography>
      </Box>
      <Paper elevation={3}>
        <table>
          <thead>
            <tr>
              <th>Match</th>
              <th>Game</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {matchData.map((match, index) => (
              <tr key={index}>
                <td>{match.match}</td>
                <td>{match.game}</td>
                <td>{match.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </div>
  );
};

export default ViewPage;