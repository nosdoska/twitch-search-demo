import * as React from "react";
import "./App.css";
import { IconClose } from "./components/icons/Close";
import { IconSearch } from "./components/icons/Search";
import { IconClock } from "./components/icons/Clock";

function App() {
  const [value, setValue] = React.useState<string>("");

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  return (
    <div className="App">
      <div className="Search-container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search"
          className={`Search-input ${value !== "" ? "active" : ""}`}
        />

        {value !== "" && (
          <button
            type="button"
            className="Search-clear"
            onClick={() => setValue("")}
          >
            <IconClose />
          </button>
        )}

        <button type="button" className="Search-button" disabled={value === ""}>
          <IconSearch />
        </button>
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
