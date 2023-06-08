import SortOption from "./SortOption";
import Row from './TableRow';

import type { TableProps } from "../types/types";

const Table = ({ expenses }: TableProps) => {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Expense
            </th>

            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">
                Category
                <SortOption />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">
                Amount
                <SortOption />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center justify-center">
                Date
                <SortOption />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item) => {
            return (
              <Row expense={item} key={item.id} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;