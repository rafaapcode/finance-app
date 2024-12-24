import { ElementType } from "react";

type ListProps = {
  items: any[];
  sourceName: string;
  Component: ElementType;
};

function List({ Component, items, sourceName }: ListProps) {
  return (
    <>
      {items.map((item, index) => (
        <Component key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}

export default List;
