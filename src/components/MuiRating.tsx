import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log(value);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size="medium"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};
