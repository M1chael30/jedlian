
export default function CorporateValuesButton({ children, onClick, customClassName}) {

  return (
    <button
      className={` rounded-full
                    md:w-30 md:h-30
                    flex justify-center items-center
                    hover:bg-yellow-400 duration-500
                    ${customClassName} lg:w-40 lg:h-40
                    `}
    onClick={onClick}

                    >
      {children}
    </button>
  );
}
