const ExpenesTable = ({expenses}) => {
  return (
    <div className='group relative'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3'>Title</th>
                    <th scope='col' className='px-6 py-3'>Category</th>
                    <th scope='col' className='px-6 py-3'>Amount</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map(({id, title, category, amount}) => (
                <tr key={id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                    <td className='px-6 py-4'>{title}</td>
                    <td className='px-6 py-4'>{category}</td>
                    <td className='px-6 py-4'>{amount}</td>
                </tr>
                ))
                }
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                    <td className='px-6 py-4'>Total</td>
                    <td className='px-6 py-4'></td>
                    <td className='px-6 py-4'>Rs. </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ExpenesTable