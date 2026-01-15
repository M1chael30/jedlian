
export default function CorporateValuesButton({ children, onClick, customClassName}) {

  return (
    <button
      className={` rounded-full
                    w-50 h-50
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
