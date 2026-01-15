export default function CorporateValuestitle({children, customClassName}) {
    return(
        <h1 className={`uppercase text-2xl ${customClassName}`}>
            {children}
        </h1>
    )
}