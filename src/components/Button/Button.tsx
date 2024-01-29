import ButtonProps from "../../interfaces/button"

function Button({children, className, width = 'w-full', ...rest}: ButtonProps) {
  return (
    <button className={`${className} ${width} text-center text-white font-medium p-2 rounded-xl`} {...rest}>
      {children}
    </button>
  )
}

export default Button