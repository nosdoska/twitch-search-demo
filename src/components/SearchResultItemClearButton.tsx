import * as React from "react";
import { IconClose } from "./icons/Close";

type ItemClearButtonProps = {
  onClick: () => void;
};

export function ItemClearButton({
  onClick,
}: ItemClearButtonProps): React.ReactElement {
  return (
    <button type="button" className="Search-result-clear" onClick={onClick}>
      <IconClose />
    </button>
  );
}
