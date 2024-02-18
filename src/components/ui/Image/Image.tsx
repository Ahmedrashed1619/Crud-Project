import { IImageProps } from "../../../interfaces"

function Image({imageUrl, alt, className}:IImageProps) {
  return (
    <img src={imageUrl} alt={alt} className={className} />
  )
}

export default Image