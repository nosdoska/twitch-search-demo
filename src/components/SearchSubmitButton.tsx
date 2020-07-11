import * as React from "react";
import { IconSearch } from "./icons/Search";

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};

export function SearchSubmitButton({
  disabled = false,
  onClick,
}: Props): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="Search-button"
    >
      <IconSearch />
    </button>
  );
}
