// ScoreSheet.js
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ScoreTable from "./ScoreTable";

function ScoreSheet() {
  const [showTable, setShowTable] = useState(false);
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    match: "Select",
    game: "Select",
    team1Players: ["", "", "", "", ""],
    team2Players: ["", "", "", "", ""],
    winner: "Select",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlayerNameChange = (e, index, team) => {
    const updatedPlayers = [...formData[`${team}Players`]];
    updatedPlayers[index] = e.target.value;
    setFormData({
      ...formData,
      [`${team}Players`]: updatedPlayers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  return (
    <div className="score-sheet">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          Score Sheet
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          id="team1"
          label="Team 1"
          variant="outlined"
          name="team1"
          value={formData.team1}
          onChange={handleInputChange}
          required
        />
        <TextField
          id="team2"
          label="Team 2"
          variant="outlined"
          name="team2"
          value={formData.team2}
          onChange={handleInputChange}
          required
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
      {showTable && <ScoreTable formData={formData} />}
      {showTable && (
        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" type="submit">
            View
          </Button>
        </div>
      )}
    </div>
  );
}

export default ScoreSheet;
