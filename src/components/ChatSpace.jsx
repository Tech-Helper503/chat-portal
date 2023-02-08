import '../index.css'
import { Message } from './Message'
import { MessageInput } from './MessageInput'

export function ChatSpace() {
    return (
        <section className="w-full flex flex-col border-white border-r-8">
            <Message isFrom>hi</Message>
            <Message>hello how are you</Message>
            <MessageInput />
        </section>
    )
}