import * as React from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput";
import { SearchClearButton } from "./components/SearchClearButton";
import { SearchSubmitButton } from "./components/SearchSubmitButton";
import { SearchResult } from "./components/SearchResult";

function getExistentHistory(): string[] {
  const history = window.localStorage.getItem("history");

  if (history) {
    const parsed = JSON.parse(history);

    return parsed;
  }

  return [];
}

function App() {
  const searchWrapperRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState<string>("");
  const [isFocused, setFocused] = React.useState<boolean>(false);
  const [history, setHistory] = React.useState<string[]>(getExistentHistory);

  React.useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function onClickOutside(event: any) {
    if (searchWrapperRef.current?.contains(event.target)) {
      return;
    }

    setFocused(false);
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setValue(target.value);
  }

  function onClear(item: string): void {
    const index = history.indexOf(item);

    setHistory((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  function onSubmit(): void {
    if (value === "") return;

    if (history.indexOf(value) < 0) {
      console.log("history.length, ", history.length);

      if (history.length > 4) {
        const copy = [...history];

        copy.shift();

        setHistory([...copy, value]);
      } else {
        setHistory((prev) => [...prev, value]);
      }
    }

    setValue("");
  }

  function onClearClick(): void {
    setValue("");
  }

  function onFocus(): void {
    setFocused(true);
  }

  const hasValue = value !== "";
  const isOpen = isFocused && (hasValue || history.length > 0);

  return (
    <div className="App">
      <div className="Search-wrapper" ref={searchWrapperRef}>
        <div className="Search-container">
          <SearchInput
            value={value}
            onFocus={onFocus}
            onChange={onChange}
            onSubmit={onSubmit}
          />

          {hasValue && isFocused && (
            <SearchClearButton onClick={onClearClick} />
          )}

          <SearchSubmitButton disabled={value === ""} onClick={onSubmit} />
        </div>

        {isOpen && (
          <SearchResult value={value} history={history} onClear={onClear} />
        )}
      </div>
    </div>
  );
}

export default App;
