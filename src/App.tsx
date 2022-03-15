import React from "react";
import { Container, Fab, SpeedDialAction } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ListExpenses from "./Comp/ListExpenses";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import "./App.css";

const actions = [{ icon: <NoteAddIcon />, name: "New record" }];

function App() {
  return (
    <>
      <CssBaseline>
        <CssBaseline />
        <Container fixed>
          <ListExpenses />
        </Container>
      </CssBaseline>
      {/* <Fab
        aria-label="Add"
        color="primary"
        style={{ position: "absolute", bottom: 50, right: 50 }}
      >
        <AddIcon />
      </Fab> */}
      {/* <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}> */}
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key={actions[0].name}
          icon={actions[0].icon}
          tooltipTitle={actions[0].name}
        />
      </SpeedDial>
      {/* </Box> */}
    </>
  );
}

export default App;
