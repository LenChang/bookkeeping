import React, { useState, createContext } from "react";
import { Box, Container, SpeedDialAction, CssBaseline } from "@mui/material";
import ListExpenses from "./Comp/ListExpenses";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import NewExpense from "./Comp/NewExpense";

import "./App.css";

const actions = [{ icon: <NoteAddIcon />, name: "New record" }];

export const OpenNewExpContext = createContext({
  open: false,
  setOpen: (tmp: boolean) => {},
});

function App() {
  // It's incorrect; there's no method to change the value to false!!!!!
  const [openNewExpense, setOpenNewExpense] = useState(false);

  return (
    <OpenNewExpContext.Provider
      value={{ open: openNewExpense, setOpen: setOpenNewExpense as any }}
    >
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
      <NewExpense />
    </OpenNewExpContext.Provider>
  );
}

export default App;
