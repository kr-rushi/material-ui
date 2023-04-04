import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(typeof value);
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      {" "}
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handlechange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="primary"
        helperText="Please Select Your Country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
