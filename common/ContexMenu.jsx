export const ContexMenu = ({
  menuPosition,
  setMenuPosition,
  rowId,
  setExpenses,
  setExpense, 
  expenses,
  setEditingRoId
}) => {
  if (!menuPosition.left) return;
  return (
    <>
    <div className="context-menu" style={{ ...menuPosition }}>
      <p onClick={() => {
        setEditingRoId(rowId)
        setExpense(expenses.find((item) => item.id === rowId))
        setMenuPosition({})
      }
        }>Edit</p>
      <p onClick={() => {
        setExpenses((prevState) => prevState.filter((item) => item.id !== rowId))
        setMenuPosition({})
        }}>Delete</p>
    </div>
    </>
  );
};
