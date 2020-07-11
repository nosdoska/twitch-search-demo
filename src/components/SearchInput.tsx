import * as React from "react";

type Props = {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export function SearchInput({
  value,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
}: Props): React.ReactElement {
  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13 && onSubmit) {
      onSubmit();
    }
  }

  return (
    <input
      type="text"
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      placeholder="Search"
      onKeyDown={onKeyDown}
      className={`Search-input ${value !== "" ? "active" : ""}`}
    />
  );
}
