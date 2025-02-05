import React, { useState } from 'react'
import ExpensesForm from './ExpensesForm'
import ExpenesTable from './ExpenesTable'
import { useTheme } from '../hooks/useTheme';
import './ExpensesMain.css'
import TableList from './TableList';

const ExpensesMain = () => {
    const [isDark] = useTheme();
    const [expenses, setExpenses] = useState(TableList)
  return (
    <>
    <main className={`expenses-container grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ${isDark && 'dark'}`}>
        <ExpensesForm setExpenses={setExpenses} />
        <ExpenesTable expenses={expenses} />
    </main>
    </>
  )
}

export default ExpensesMain