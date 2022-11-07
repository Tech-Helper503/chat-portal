/**
 * @param {object} props
 * @param {import('firebase/auth').AuthError} props.error
 */
export const ErrorElement = ({error}) => (
    <>
    <h1 className="text-9xl dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]">Sorry... we ran into an error</h1>
    <span className="dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]">{error.message}</span>
    </>
)