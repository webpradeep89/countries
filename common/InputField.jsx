const InputField = ({label, id, name, value, error, onChange}) => {
  return (
    <div className="col-span-full relative mb-4">
            <label htmlFor={id} className="block text-color text-sm/6 font-medium text-gray-900">{label}</label>
            <div className="mt-2">
              <input type="text" name={name} id={id} value={value} onChange={onChange} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p className="error">{error}</p>
    </div>
  )
}

export default InputField