import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";
import List from "../List";

type SelectItemComponentProps = {
  value: string;
};

const SelectItemComponent = ({ value }: SelectItemComponentProps) => {
  return <SelectItem value={value.toLocaleLowerCase()}>{value}</SelectItem>
};

type SelectComponentProps = {
  categories: string[];
  onValueChange: (value: string | null) => void;
  placeHolder: string;
}

function SelectComponent({categories, onValueChange, placeHolder}: SelectComponentProps) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categorias</SelectLabel>
          <List Component={SelectItemComponent} items={categories} sourceName="value"/>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default memo(SelectComponent);
