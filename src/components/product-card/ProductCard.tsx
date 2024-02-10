import imgTest from '../../assets/images/default-img.png';
import IProduct from '../../interfaces/product';
import { txtSlicer } from '../../utils/functions';
import Button from '../Button/Button';
import Color from '../Color/Color';
import Image from '../Image/Image';

interface IProps {
  product: IProduct
}
const ProductCard = ({product}: IProps) => {

  const {imageURL, title, description, price, colors} = product

  return (
    <div className="border-2 p-2 rounded-md">
      <Image imageUrl={imageURL ? imageURL : imgTest} alt={title} className={'rounded-md mb-2 w-full h-64'} />
      <h2 className='font-semibold'>{title}</h2>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        {colors.length > 0 ?
          colors.map((color, i) => (
            <Color key={i} className={color} />
          ))
          :
          <Color className={''} />
        }
      </div>
      <div className="flex items-center justify-between mb-3">
        <h4 className='font-semibold'>${price}</h4>
        <Image imageUrl={imageURL ? imageURL : imgTest} alt={title} className={'w-10 h-10 object-center rounded-full'} />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <Button className={'bg-indigo-700'} >Edit</Button>
        <Button className={'bg-red-700'} >Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard