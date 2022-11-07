export const NotFound = err => (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]">Sorry we ran into an error...</h1>
        <p>{err.statusCode}</p>
    </div>
)