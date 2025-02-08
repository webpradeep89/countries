import React, { useEffect, useState } from "react";
import ExpensesForm from "./ExpensesForm";
import ExpenesTable from "./ExpenesTable";
import { useTheme } from "../hooks/useTheme";
import "./ExpensesMain.css";
import TableList from "./TableList";
import { useLocalStrorage } from "../hooks/useLocalStrorage";

const ExpensesMain = () => {
  const [isDark] = useTheme();
  const [expense, setExpense] = useLocalStrorage('expense', {
    title: "",
    category: "",
    amount: "",
  });

  const [expenses, setExpenses] = useLocalStrorage('expenses', TableList);
  const [editingRoId, setEditingRoId] = useLocalStrorage("editingRoId", '');
  return (
    <>
      <main
        className={`expenses-container grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ${
          isDark && "dark"
        }`}
      >
        <ExpensesForm
          setEditingRoId={setEditingRoId}
          editingRoId={editingRoId}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
        <ExpenesTable
          setEditingRoId={setEditingRoId}
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
        />
      </main>
    </>
  );
};

export default ExpensesMain;
