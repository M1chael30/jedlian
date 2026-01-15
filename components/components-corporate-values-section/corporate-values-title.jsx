export default function CorporateValuestitle({children, customClassName}) {
    return(
        <h1 className={`uppercase ${customClassName}`}>
            {children}
        </h1>
    )
}