import { useEffect, useState } from "react";
import { ContexMenu } from "../common/ContexMenu";
import { useFilter } from "../hooks/useFilter";

const ExpenesTable = ({
  expenses,
  setExpense,
  setExpenses,
  setEditingRoId,
}) => {
  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [sortCallBack, setSortCallBack] = useState(() => {})
  const sum = filteredData.reduce(
    (accumulator, current) => accumulator + parseInt(current.amount),
    0
  );
  return (
    <>
      <ContexMenu
        expenses={expenses}
        setEditingRoId={setEditingRoId}
        setExpense={setExpense}
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        rowId={rowId}
        setExpenses={setExpenses}
      />
      <div className="group relative" onClick={(e) => {
        if (menuPosition.left) {
            setMenuPosition({})
        }}
      }>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                <select
                  onChange={(e) => setQuery(e.target.value)}
                  className="col-start-1 row-start-1 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
              </th>
              <th scope="col" className="px-6 py-3">
                Amount 
                <b onClick={() => setSortCallBack(() => (a, b) => a.amount - b.amount)}> A </b> 
                <b onClick={() => setSortCallBack(() => (a, b) => b.amount - a.amount)}> D </b>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.sort(sortCallBack).map(({ id, title, category, amount }) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({
                    left: e.clientX + 4,
                    top: e.clientY + 4,
                    display: "block",
                  });
                  setRowId(id);
                }}
              >
                <td className="px-6 py-4">{title}</td>
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">{amount}</td>
              </tr>
            ))}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">Total</td>
              <td className="px-6 py-4"><b onClick={() => setSortCallBack(() => {})}>Clear Sort</b></td>
              <td className="px-6 py-4">Rs. {sum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenesTable;
