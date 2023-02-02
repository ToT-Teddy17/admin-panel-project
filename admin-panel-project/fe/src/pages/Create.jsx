import React from "react";
import TextField from "@mui/material/TextField";

export default function Create() {
  return (
    <div>
      <TextField required id="outlined-required" label="First Name" />
      <TextField required id="outlined-required" label="Last Name" />
      <TextField
        id="outlined-number"
        label="Phone Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField required id="outlined-required" label="Email" type={"email"} />
    </div>
  );
}
