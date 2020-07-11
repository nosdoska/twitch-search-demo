import * as React from "react";
import { Children } from "./SearchResult";

type ItemProps = Children & {
  href?: string;
};

export function Item({ href, children }: ItemProps) {
  return <a href={href}>{children}</a>;
}
