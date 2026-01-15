
export default function CorporateValuesButton({ children, onClick, customClassName}) {

  return (
    <button
      className={` rounded-full
                    w-20 h-20 md:w-50 md:h-50
                    flex justify-center items-center
                    hover:bg-yellow-400 duration-500

                    ${customClassName}
                    `}
    onClick={onClick}

                    >
      {children}
    </button>
  );
}
