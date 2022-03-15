import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import ListExpenses from "./Comp/ListExpenses";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <>
      <CssBaseline>
        <CssBaseline />
        <Container fixed>
          <ListExpenses />
        </Container>
      </CssBaseline>
      <Fab
        aria-label="Add"
        color="primary"
        style={{ position: "absolute", bottom: 50, right: 50 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;
