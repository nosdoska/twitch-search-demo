import * as React from "react";
import "./App.css";
import { IconClose } from "./components/icons/Close";
import { IconSearch } from "./components/icons/Search";
import { IconClock } from "./components/icons/Clock";
import { SearchInput } from "./components/SearchInput";
import { SearchClearButton } from "./components/SearchClearButton";
import { SearchSubmitButton } from "./components/SearchSubmitButton";

function App() {
  const [value, setValue] = React.useState<string>("");

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setValue(target.value);
  }

  function onClearClick() {
    setValue("");
  }

  return (
    <div className="App">
      <div className="Search-container">
        <SearchInput value={value} onChange={onChange} />

        {value !== "" && <SearchClearButton onClick={onClearClick} />}

        <SearchSubmitButton disabled={value === ""} />
      </div>

      {value !== "" && (
        <div className="Search-result">
          <button className="Search-result-item">
            <span>
              <IconSearch /> {value}
            </span>
          </button>
          <button className="Search-result-item history">
            <span>
              <IconClock /> This is a text
            </span>
            <button className="Search-result-clear">
              <IconClose />
            </button>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
