import ColorProps from "../../interfaces/color"

function Color({className}: ColorProps) {
  return (
    <span style={{backgroundColor: className}} className={`w-5 h-5 rounded-full cursor-pointer me-2 mb-3`} />
  )
}

export default Color