
import React, { Component } from "react";
import { connect } from "react-redux";
import { addMatch } from "../ReduxStore/actions/index";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: "",
      team2: "",
      match: "Match 1",
      game: "Singles",
      team1Player: "",
      team2Player: "",
      winner: "Team 1",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch an action to add the match to Redux state
    this.props.addMatch(this.state);
  };

  render() {
    return (
      <div className="landing-page">
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            Score Sheet
          </Typography>
        </Box>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Typography variant="h5" component="h2">
              Team 1 :
            </Typography>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter Team Name"
                variant="outlined"
              />
            </Box>
          </div>
          <div>
            <Typography variant="h5" component="h2">
              Team 2 :
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter Team Name"
                variant="outlined"
              />
            </Box>
          </div>
          <Button variant="contained">Contained</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMatch: (matchData) => dispatch(addMatch(matchData)),
});

export default connect(null, mapDispatchToProps)(LandingPage);
