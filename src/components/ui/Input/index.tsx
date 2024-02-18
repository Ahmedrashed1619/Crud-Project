import { InputHTMLAttributes } from "react"

const Input = ({...rest}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input 
        {...rest}
        className="rounded-lg p-2 shadow-md border border-gray-300
                focus:border-indigo-300 focus:outline-none focus:ring-2
                focus:ring-indigo-300 transition-all duration-200"
      />
  )
}

export default Input