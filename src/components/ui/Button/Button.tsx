import { IButtonProps } from "../../../interfaces"

const Button = ({children, className, width = 'w-full', ...rest}: IButtonProps) => {
  return (
    <button className={`${className} ${width} text-center text-white font-medium p-2 rounded-lg transition-all duration-300`} {...rest}>
      {children}
    </button>
  )
}

export default Button