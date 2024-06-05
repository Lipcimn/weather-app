import { useState } from "react";
import "./App.css";
import { TextField } from "@mui/material";
import { cityNameInputConfirmation } from "./hooks/handles";

function App() {
  const [name, setName] = useState<string>("");
  return (
    <>
      <TextField
        id="standard-basic"
        label="City Name"
        variant="standard"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyUp={(event) => cityNameInputConfirmation(event, name)}
      />
    </>
  );
}

export default App;
