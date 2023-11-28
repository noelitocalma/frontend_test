export type SortingKey = 'name' | 'company' | 'email';
export type SortingOrder = 'ascending' | 'descending';
export type SortingProps = {
  key: SortingKey
  order: SortingOrder
}