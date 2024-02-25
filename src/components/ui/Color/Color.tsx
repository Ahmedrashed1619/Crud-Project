import { IColorProps } from "../../../interfaces"

function Color({color, ...rest}: IColorProps) {
  return (
    <span style={{backgroundColor: color}} className={`w-6 h-6 rounded-full cursor-pointer me-1.5 mb-3`} {...rest} />
  )
}

export default Color