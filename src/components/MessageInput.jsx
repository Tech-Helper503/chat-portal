import '../index.css'

export function MessageInput() {
    return (
        <form className="absolute bottom-0 w-[77%]">
            <input type="text" placeholder="enter your message here :)" className="m-4 rounded-xl bg-zinc-800 w-11/12 h-8"/>
            <button type="submit" className=" bg-zinc-800 rounded-full h-max w-max p-2">🕊</button>
        </form>
    )
}