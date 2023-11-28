import Select from "react-select";
import { User } from "./types/user";
import { useSorting } from "./hooks/useSorting";
import { SortingKey, SortingOrder } from "./types/sorting";
import { useEffect } from "react";

type ControlProps = {
  users: User[]
  onSort: React.Dispatch<User[]>
}

const Controls = (props: ControlProps) => {
  const { sorting, onSort, onSortFieldChange, onSortDirectionChange } = useSorting();

  useEffect(() => {
    if (sorting?.key && sorting?.order) {
      props.onSort(onSort(props.users))
    }
  }, [sorting])

  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          onChange={(item) => onSortFieldChange(item?.value as SortingKey)}
          inputId="sort-field"
          className="input" />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          onChange={(item) => onSortDirectionChange(item?.value as SortingOrder)}
          inputId="sort-direction"
          className="input"
        />
      </div>
    </div>
  );
};

export default Controls;
