import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ScoreTable from "./ScoreTable";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function ScoreSheet() {
  const [showTable, setShowTable] = useState(false);
  const [showSubmitViewButtons, setShowSubmitViewButtons] = useState(false);
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    match: "",
    game: "",
    team1Players: ["", "", "", "", ""],
    team2Players: ["", "", "", "", ""],
    winner: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handlePlayerNameChange = (e, index, team) => {
  //   const updatedPlayers = [...formData[`${team}Players`]];
  //   updatedPlayers[index] = e.target.value;
  //   setFormData({
  //     ...formData,
  //     [`${team}Players`]: updatedPlayers,
  //   });
  // };

  const handleAddClick = () => {
    if (formData.team1 && formData.team2) {
      setShowTable(true);
      setShowSubmitViewButtons(true);
    } else {
      alert("Both Team 1 and Team 2 names are required");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/scores", formData);
      console.log("Data sent to server:", formData); 
      console.log("Server response:", response.data); 
      // handleView();
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const handleView = () => {
    navigate("/view");
  };

  return (
    <div className="score-sheet">
      <Box sx={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom align="center">
          Score Sheet
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
          <Button variant="contained" onClick={handleAddClick}>
            Add
          </Button>
        </div>
      </form>
      {showTable && formData.team1 && formData.team2 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ScoreTable formData={formData} />
        </div>
      )}
      {showSubmitViewButtons && formData.team1 && formData.team2 && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={handleView}>
            View
          </Button>
        </div>
      )}
    </div>
  );
}

export default ScoreSheet;
