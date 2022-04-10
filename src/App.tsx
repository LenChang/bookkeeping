import React, { useState } from "react";
import { Box, Container, SpeedDialAction, CssBaseline } from "@mui/material";
import ListExpenses from "./Comp/ListExpenses";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import NewExpense from "./Comp/NewExpense";

import "./App.css";

const actions = [{ icon: <NoteAddIcon />, name: "New record" }];

function App() {
  const [openNewExpense, setOpenNewExpense] = useState(false);

  return (
    <>
      <CssBaseline>
        <CssBaseline />
        <Container fixed>
          <Box margin={2} sx={{ display: "flex", justifyContent: "center" }}>
            16th, Mar 2022 09:29
          </Box>
        </Container>
        <Container fixed>
          <ListExpenses />
        </Container>
      </CssBaseline>
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key={actions[0].name}
          icon={actions[0].icon}
          tooltipTitle={actions[0].name}
          onClick={() => setOpenNewExpense(true)}
        />
      </SpeedDial>
      <NewExpense isOpen={openNewExpense} />
    </>
  );
}

export default App;
