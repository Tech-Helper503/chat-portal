export const LoadingError = ({loading, error, loadingElement, errorElement, children}) => (
    <>
    {loading ? loadingElement : error ? errorElement: children}
    </>
)
