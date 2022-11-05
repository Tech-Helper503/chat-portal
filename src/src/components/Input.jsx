import '@fontsource/roboto'


export function Input({placeholder, className, type, id}) {
    return (
        <div>

            {id === undefined ? <input type={type === undefined ? "text": type} className={`border-0 bg-inherit outline-0 border-b-gray-400 focus:border-b-indigo-500 border-b-2 text-white p-3${className === undefined ? "" : className}`} placeholder={placeholder}/>: <input type={type === undefined ? "text": type} id={id} className={`border-0 bg-inherit outline-0 border-b-gray-400 focus:border-b-indigo-500 border-b-2 text-white p-3${className === undefined ? "" : className}`} placeholder={placeholder}/>}
        </div>
    )
}