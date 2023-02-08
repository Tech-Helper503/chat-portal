export function Message({children, isFrom}) {
    return (
        <div className={`h-6 flex justify-center items-center ${isFrom ? "self-end" : "self-start"} bg-blue-500 rounded-2xl p-6 m-6 border-white`}>
            <p>{children}</p>
        </div>
    )
}
