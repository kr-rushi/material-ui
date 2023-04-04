import "./App.css";
import { MuiAutoComplete } from "./components/MuiAutoComplete";
import { MuiBox } from "./components/MuiBox";
import { MuiButton } from "./components/MuiButton";
import { MuiCheckBox } from "./components/MuiCheckBox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiRating } from "./components/MuiRating";
import { MuiSelect } from "./components/MuiSelect";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete />
      <MuiBox />
    </div>
  );
}

export default App;
