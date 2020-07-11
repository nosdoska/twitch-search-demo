import * as React from 'react';
import { IconSearch } from './icons/Search';

type Props = {
  disabled?: boolean;
}

export function SearchSubmitButton({ disabled = false }: Props): React.ReactElement {
  return (
    <button type="button" className="Search-button" disabled={disabled}>
      <IconSearch />
    </button>
  )
}