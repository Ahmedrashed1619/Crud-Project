import ImageProps from "../../interfaces/image"


function Image({imageUrl, alt, className}:ImageProps) {
  return (
    <img src={imageUrl} alt={alt} className={className} />
  )
}

export default Image