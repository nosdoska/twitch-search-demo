import * as React from "react";
import { Children } from "./SearchResult";

type ItemContainerProps = Children & {
  highlighted?: boolean;
};

export function ItemContainer({ highlighted, children }: ItemContainerProps) {
  return (
    <button
      type="button"
      className={`Search-result-item ${highlighted ? "highlight" : ""}`}
    >
      {children}
    </button>
  );
}
