import ColorProps from "../../interfaces/color"

function Color({className}: ColorProps) {
  return (
    <span style={{backgroundColor: className}} className={`w-6 h-6 rounded-full cursor-pointer me-1.5 mb-3`} />
  )
}

export default Color