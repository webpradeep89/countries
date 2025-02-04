import React from 'react'
import ExpensesForm from './ExpensesForm'
import ExpenesTable from './ExpenesTable'
import { useTheme } from '../hooks/useTheme';
import './ExpensesMain.css'

const ExpensesMain = () => {
    const [isDark] = useTheme();
  return (
    <main className={`expenses-container ${isDark && 'dark'}`}>
        <ExpensesForm />
        <ExpenesTable />
    </main>
  )
}

export default ExpensesMain