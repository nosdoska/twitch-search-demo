import * as React from 'react';
import { IconClose } from './icons/Close';

type Props = {
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export function SearchClearButton({ onClick }: Props): React.ReactElement | null {
  return (
    <button
      type="button"
      onClick={onClick}
      className="Search-clear"
    >
      <IconClose />
    </button>
  )
}