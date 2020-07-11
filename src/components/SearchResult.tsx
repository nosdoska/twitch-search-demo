import * as React from "react";
import { IconSearch } from "./icons/Search";
import { IconClock } from "./icons/Clock";
import { IconClose } from "./icons/Close";

type Children = {
  children: React.ReactNode;
};

type ItemContainerProps = Children & {
  highlighted?: boolean;
};

function ItemContainer({ highlighted, children }: ItemContainerProps) {
  return (
    <button className={`Search-result-item ${highlighted ? "highlight" : ""}`}>
      {children}
    </button>
  );
}

type ItemProps = Children;

function Item({ children }: ItemProps) {
  return <span>{children}</span>;
}

type ItemClearButtonProps = {
  onClick: () => void;
};

function ItemClearButton({
  onClick,
}: ItemClearButtonProps): React.ReactElement {
  return (
    <button type="button" className="Search-result-clear" onClick={onClick}>
      <IconClose />
    </button>
  );
}

type Props = {
  value: string;
  history?: string[];
  onClear: (item: string) => void;
};

function SearchResult({ value, history, onClear }: Props): React.ReactElement {
  const hasValue = value !== "";

  return (
    <div className="Search-result">
      {hasValue && (
        <>
          <ItemContainer>
            <Item>
              <IconSearch /> {value}
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>Go to {value}</Item>
          </ItemContainer>
        </>
      )}

      {!hasValue &&
        history &&
        history.length > 0 &&
        [...history].reverse().map((item) => (
          <ItemContainer key={item} highlighted>
            <Item>
              <IconClock /> {item}
            </Item>
            <ItemClearButton onClick={() => onClear(item)} />
          </ItemContainer>
        ))}
    </div>
  );
}

SearchResult.Item = Item;
SearchResult.ItemContainer = ItemContainer;
SearchResult.ItemClearButton = ItemClearButton;

export { SearchResult };
