import * as React from "react";
import { IconSearch } from "./icons/Search";
import { IconClock } from "./icons/Clock";
import { Item } from "./SearchResultItem";
import { ItemClearButton } from "./SearchResultItemClearButton";
import { ItemContainer } from "./SearchResultItemContainer";
import Trie from "../helpers/trie";

export type Children = {
  children: React.ReactNode;
};

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
        <ItemContainer>
          <Item>
            <IconSearch /> {value}
          </Item>
        </ItemContainer>
      )}

      {!hasValue &&
        history &&
        history.length > 0 &&
        [...history].reverse().map((item) => (
          <ItemContainer key={item} highlighted>
            <Item href={`/search?q=${encodeURI(item)}`}>
              <IconClock /> {item}
            </Item>
            <ItemClearButton onClick={() => onClear(item)} />
          </ItemContainer>
        ))}

      {hasValue &&
        Trie.getSuggestions(value).map((suggestion) => (
          <ItemContainer key={suggestion}>
            <Item>
              <IconSearch /> {suggestion}
            </Item>
          </ItemContainer>
        ))}

      {hasValue && (
        <ItemContainer>
          <Item>Go to {value}</Item>
        </ItemContainer>
      )}
    </div>
  );
}

SearchResult.Item = Item;
SearchResult.ItemContainer = ItemContainer;
SearchResult.ItemClearButton = ItemClearButton;

export { SearchResult };
