import '@fontsource/roboto'
import { Input } from '../components/Input'
import '../App.css'

export function AuthBox() {
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col gap-10 dark:bg-[var(--color-surface-dark)] bg-[var(--color-surface-light)]'>
            <h1 className="text-6xl p-10 rounded-lg">Login</h1>
            <Input placeholder="username" id="username"/>
            <Input placeholder="password" type='password'id="password" />
            <Input placeholder="school id" id="school-id"/>
        </div>
    )
}
