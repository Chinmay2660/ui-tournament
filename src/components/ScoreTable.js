import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ScoreTable({ formData }) {
  const [matchSelects, setMatchSelects] = useState(["", "", "", "", ""]);
  const [gameSelects, setGameSelects] = useState(["", "", "", "", ""]);
  const [team1Players, setTeam1Players] = useState([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ]);
  const [team2Players, setTeam2Players] = useState([
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ]);
  const [winnerSelects, setWinnerSelects] = useState(["", "", "", "", ""]);

  const handleChangeMatch = (event, index) => {
    const updatedMatchSelects = [...matchSelects];
    updatedMatchSelects[index] = event.target.value;
    setMatchSelects(updatedMatchSelects);
  };

  const handleChangeGame = (event, index) => {
    const updatedGameSelects = [...gameSelects];
    updatedGameSelects[index] = event.target.value;
    setGameSelects(updatedGameSelects);
  };

  const handleChangePlayerName = (event, playerIndex, index, team) => {
    const updatedPlayers =
      team === "team1" ? [...team1Players] : [...team2Players];
    updatedPlayers[index][playerIndex] = event.target.value;
    if (team === "team1") {
      setTeam1Players(updatedPlayers);
    } else {
      setTeam2Players(updatedPlayers);
    }
  };

  const handleChangeWinner = (event, index) => {
    const updatedWinnerSelects = [...winnerSelects];
    updatedWinnerSelects[index] = event.target.value;
    setWinnerSelects(updatedWinnerSelects);
  };

  const rows = [0, 1, 2, 3, 4];

  return (
    <div className="score-table" style={{ height: "400px", overflowY: "auto" }}>
      <TableContainer component={Paper} style={{ height: "100%" }}>
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
                  minWidth: "160px",
                  width: "160px",
                  textAlign: "center",
                }}
              >
                Team 1: {formData.team1}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  minWidth: "160px",
                  width: "160px",
                  textAlign: "center",
                }}
              >
                Team 2: {formData.team2}
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
            {rows.map((index) => (
              <TableRow key={index}>
                <TableCell size="small">
                  <Select
                    size="small"
                    value={matchSelects[index]}
                    onChange={(event) => handleChangeMatch(event, index)}
                    style={{ minWidth: "120px", width: "120px" }}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value="Singles">Match 1</MenuItem>
                    <MenuItem value="Doubles">Match 2</MenuItem>
                    <MenuItem value="Doubles">Match 3</MenuItem>
                    <MenuItem value="Doubles">Match 4</MenuItem>
                    <MenuItem value="Doubles">Match 5</MenuItem>
                  </Select>
                </TableCell>
                <TableCell size="small">
                  <Select
                    size="small"
                    value={gameSelects[index]}
                    onChange={(event) => handleChangeGame(event, index)}
                    style={{ minWidth: "120px", width: "120px" }}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    <MenuItem value="Singles">Singles</MenuItem>
                    <MenuItem value="Doubles">Doubles</MenuItem>
                  </Select>
                </TableCell>
                <TableCell size="small">
                  {gameSelects[index] === "Doubles" ? (
                    <div>
                      <TextField
                        size="small"
                        label="Player Name 1"
                        variant="outlined"
                        value={team1Players[index][0]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 0, index, "team1")
                        }
                        style={{ width: "200px" }}
                      />
                      <TextField
                        size="small"
                        label="Player Name 2"
                        variant="outlined"
                        value={team1Players[index][1]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 1, index, "team1")
                        }
                        style={{ width: "200px" }}
                      />
                    </div>
                  ) : (
                    <TextField
                      size="small"
                      label="Player Name"
                      variant="outlined"
                      value={team1Players[index][0]}
                      onChange={(event) =>
                        handleChangePlayerName(event, 0, index, "team1")
                      }
                      style={{ width: "200px" }}
                    />
                  )}
                </TableCell>
                <TableCell size="small">
                  {gameSelects[index] === "Doubles" ? (
                    <div>
                      <TextField
                        size="small"
                        label="Player Name 1"
                        variant="outlined"
                        value={team2Players[index][0]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 0, index, "team2")
                        }
                        style={{ width: "200px" }}
                      />
                      <TextField
                        size="small"
                        label="Player Name 2"
                        variant="outlined"
                        value={team2Players[index][1]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 1, index, "team2")
                        }
                        style={{ width: "200px" }}
                      />
                    </div>
                  ) : (
                    <TextField
                      size="small"
                      label="Player Name"
                      variant="outlined"
                      value={team2Players[index][0]}
                      onChange={(event) =>
                        handleChangePlayerName(event, 0, index, "team2")
                      }
                      style={{ width: "200px" }}
                    />
                  )}
                </TableCell>
                <TableCell size="small">
                  <Select
                    size="small"
                    value={winnerSelects[index]}
                    onChange={(event) => handleChangeWinner(event, index)}
                    style={{ minWidth: "120px", width: "180px" }}
                  >
                    <MenuItem value="" disabled>
                      Select
                    </MenuItem>
                    {[
                      `Team 1 - ${formData.team1}`,
                      `Team 2 - ${formData.team2}`,
                    ].map((winnerOption) => (
                      <MenuItem key={winnerOption} value={winnerOption}>
                        {winnerOption}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ScoreTable;
