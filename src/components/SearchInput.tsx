import * as React from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ value, onChange }: Props): React.ReactElement {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search"
      className={`Search-input ${value !== "" ? "active" : ""}`}
    />
  )
}