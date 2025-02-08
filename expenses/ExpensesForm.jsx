import React, { useState } from "react";
import InputField from "../common/InputField";
import SelectMenu from "../common/SelectMenu";

const ExpensesForm = ({
  expense,
  setExpense,
  setExpenses,
  editingRoId,
  setEditingRoId
}) => {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      {
        pattern: /^[1-9]\d*(\.\d+)?$/,
        message: "Please enter a valid number",
      },
    ],
    // email: [
    //   { required: true, message: "Please enter an email" },
    //   {
    //     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message: "Please enter a valid email",
    //   },
    // ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key]?.some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;
    if (editingRoId) {
      setExpenses((prevState) => 
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRoId) {
            return { ...expense, id: editingRoId }
          }
          return prevExpense
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRoId("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
      // email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <InputField
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      <SelectMenu
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        onChange={handleChange}
        error={errors.category}
      />
      <InputField
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      {/* <InputField
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onChange={handleChange}
        error={errors.email}
      /> */}
      <button className="add-btn">{editingRoId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpensesForm;
