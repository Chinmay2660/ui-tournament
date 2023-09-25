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
    matches: [],
  });

  const [tableData, setTableData] = useState({
    matchSelects: ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"],
    gameSelects: ["Singles", "Singles", "Singles", "Singles", "Singles"],
    team1Players: [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
    ],
    team2Players: [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
    ],
    winnerSelects: ["", "", "", "", ""],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateTableData = (newData) => {
    setTableData(newData);
  };

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
    console.log("Data submitted:", tableData);

    // Your axios request and other logic here
    try {
      const response = await axios.post("/api/scores", { ...formData, ...tableData });
      console.log("Data sent to server:", formData);
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const handleView = () => {
    navigate("/view");
  };

  return (
    <div className="score-sheet" style={{ marginTop: "20px" }}>
      <Box sx={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
        <Typography variant="h5" gutterBottom align="center">
          Score Sheet
        </Typography>
      </Box>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="team1"
            label="Team 1"
            variant="outlined"
            name="team1"
            value={formData.team1}
            onChange={handleInputChange}
            required
            style={{ marginRight: "20px" }}
          />
          <TextField
            id="team2"
            label="Team 2"
            variant="outlined"
            name="team2"
            value={formData.team2}
            onChange={handleInputChange}
            required
            style={{ marginRight: "20px" }}
          />
          <Button variant="contained" onClick={handleAddClick}>
            Add
          </Button>
        </div>
      </form>
      {showTable && formData.team1 && formData.team2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <ScoreTable formData={formData} tableData={tableData} updateTableData={updateTableData} />
        </div>
      )}
      {showSubmitViewButtons && formData.team1 && formData.team2 && (
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "30px", marginBottom: "30px", marginRight: "150px" }}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            style={{ marginRight: "20px" }}
          >
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
