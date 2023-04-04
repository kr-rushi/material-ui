import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="hello" variant="outlined" />
        <TextField label="hello" variant="filled" />
        <TextField label="hello" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not show your paswword to  anyone"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          type="password"
          size="small"
          color="secondary"
          helperText="Do not show your password"
          disabled
        />
        <TextField label="readonly" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
