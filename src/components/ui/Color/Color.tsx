import { IColorProps } from "../../../interfaces"

function Color({color, ...rest}: IColorProps) {
  return (
    <span
      className={`w-6 h-6 rounded-full cursor-pointer me-1.5 mb-3`}
      style={{backgroundColor: color}}
      {...rest}
    />
  )
}

export default Color