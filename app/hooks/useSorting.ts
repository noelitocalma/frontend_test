import { useState } from "react";
import { User } from "../types/user";
import { SortingKey, SortingOrder, SortingProps } from "../types/sorting";

export const useSorting = () => {
  const [sorting, setSorting] = useState<SortingProps>();

  const onSortFieldChange = (key: SortingKey) => {
    if (!sorting?.order) {
      setSorting({ order: 'ascending', key })
    } else {
      setSorting({ ...sorting, key })
    }
  }

  const onSortDirectionChange = (order: SortingOrder) => {
    if (!sorting?.key) {
      setSorting({ key: 'name', order })
    } else {
      setSorting({ ...sorting, order })
    }
  }

  const onSort = (items: User[]): User[] => {
    const sortedItems = items.sort((a: User, b: User) => {
      const valueA = sorting?.key === 'company' ? a.company.name : a[sorting?.key as SortingKey];
      const valueB = sorting?.key === 'company' ? b.company.name : b[sorting?.key as SortingKey];

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    console.table(sortedItems, [sorting?.key as SortingKey]);
    console.log(sorting)

    return sorting?.order === 'ascending' ? sortedItems : sortedItems.reverse();
  }

  return {
    onSort,
    onSortFieldChange,
    onSortDirectionChange,
    sorting
  }
}