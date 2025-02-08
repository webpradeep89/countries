const SelectMenu = ({label, id, name, value, error, defaultOption, options, onChange}) => {
  return (
    <div className='col-span-full relative mb-4'>
        <label htmlFor={id} className="block text-color text-sm/6 font-medium text-gray-900">{label}</label>
        <select onChange={onChange} id={id} value={value} name={name} className="col-start-1 row-start-1 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            {defaultOption &&
            <option value="" hidden>{defaultOption}</option>
            }
            {options.map((option, i) => 
              <option key={i} value={option}>{option}</option>
            )}
        </select>
        <p className="error">{error}</p>
    </div>
  )
}

export default SelectMenu