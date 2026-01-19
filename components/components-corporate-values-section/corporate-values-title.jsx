export default function CorporateValuestitle({children, customClassName}) {
    return(
        <h1 className={`uppercase text-subtitle ${customClassName}`}>
            {children}
        </h1>
    )
}