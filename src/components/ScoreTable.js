import React from "react";
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

function ScoreTable({ formData, tableData, updateTableData }) {
  const handleChangeMatch = (event, index) => {
    const updatedMatches = [...tableData];
    updatedMatches[index].matchSelects = event.target.value;
    updateTableData(updatedMatches);
  };

  const handleChangeGame = (event, index) => {
    const updatedMatches = [...tableData];
    updatedMatches[index].gameSelects = event.target.value;
    updateTableData(updatedMatches);
  };

  const handleChangePlayerName = (event, playerIndex, index, team) => {
    const updatedMatches = [...tableData];
    if (team === "team1") {
      updatedMatches[index].team1Players[playerIndex] = event.target.value;
    } else {
      updatedMatches[index].team2Players[playerIndex] = event.target.value;
    }
    updateTableData(updatedMatches);
  };

  const handleChangeWinner = (event, index) => {
    const updatedMatches = [...tableData];
    updatedMatches[index].winnerSelects = event.target.value;
    updateTableData(updatedMatches);
  };

  return (
    <div className="score-table" style={{ height: "600px", overflowY: "auto" }}>
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
                Team 1 - {formData.team1}
              </TableCell>
              <TableCell
                size="small"
                style={{
                  minWidth: "160px",
                  width: "160px",
                  textAlign: "center",
                }}
              >
                Team 2 - {formData.team2}
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
            {tableData.map((match, index) => (
              <TableRow key={index} style={{ height: "110px" }}>
                <TableCell size="small">
                  <Select
                    size="small"
                    value={match.matchSelects}
                    onChange={(event) => handleChangeMatch(event, index)}
                    style={{ minWidth: "120px", width: "120px" }}
                  >
                    <MenuItem value="Match 1">Match 1</MenuItem>
                    <MenuItem value="Match 2">Match 2</MenuItem>
                    <MenuItem value="Match 3">Match 3</MenuItem>
                    <MenuItem value="Match 4">Match 4</MenuItem>
                    <MenuItem value="Match 5">Match 5</MenuItem>
                  </Select>
                </TableCell>
                <TableCell size="small">
                  <Select
                    size="small"
                    value={match.gameSelects}
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
                  {match.gameSelects === "Doubles" ? (
                    <div>
                      <TextField
                        size="small"
                        label="Player Name 1"
                        variant="outlined"
                        value={match.team1Players[0]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 0, index, "team1")
                        }
                        style={{
                          width: "200px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      />
                      <TextField
                        size="small"
                        label="Player Name 2"
                        variant="outlined"
                        value={match.team1Players[1]}
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
                      value={match.team1Players[0]}
                      onChange={(event) =>
                        handleChangePlayerName(event, 0, index, "team1")
                      }
                      style={{ width: "200px" }}
                    />
                  )}
                </TableCell>
                <TableCell size="small">
                  {match.gameSelects === "Doubles" ? (
                    <div>
                      <TextField
                        size="small"
                        label="Player Name 1"
                        variant="outlined"
                        value={match.team2Players[0]}
                        onChange={(event) =>
                          handleChangePlayerName(event, 0, index, "team2")
                        }
                        style={{
                          width: "200px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      />
                      <TextField
                        size="small"
                        label="Player Name 2"
                        variant="outlined"
                        value={match.team2Players[1]}
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
                      value={match.team2Players[0]}
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
                    value={match.winnerSelects}
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
