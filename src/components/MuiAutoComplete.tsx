import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
type Skill = {
  id: number;
  label: string;
};
const skills = ["Html", "Css", "Javascript", "Typescript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [value1, setValue1] = useState<Skill | null>(null);

  console.log(value, value1);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value1}
        onChange={(event: any, newValue: Skill | null) => setValue1(newValue)}
      />
    </Stack>
  );
};
