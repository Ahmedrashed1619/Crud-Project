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

  const {imageURL, title, description, price, colors, category} = product

  return (
    <div className="max-w-sm mx-auto border-2 p-2 rounded-md">
      <Image imageUrl={imageURL ? imageURL : imgTest} alt={title} className="rounded-md h-56 w-full lg:object-cover" />
      <h3 className='text-lg font-semibold my-2' title={title}>{txtSlicer(title, 25)}</h3>
      <p className='text-sm text-gray-500 break-words mb-4' title={description}>{txtSlicer(description, 80)}</p>
      <div className="flex flex-wrap items-center mb-2">
        {colors.length > 0 ?
          colors.map((color, i) => (
            <Color key={i} className={color} />
          ))
          :
          <Color className={''} />
        }
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <div className="flex items-center gap-2">
          <Image imageUrl={category.imageURL ? category.imageURL : imgTest} alt={category.name} className={'w-10 h-10 object-center rounded-full'} />
          <span className="text-sm text-indigo-600 font-semibold" title={category.name}>{category.name}</span>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-3 mt-3">
        <Button className={'bg-indigo-700'} >Edit</Button>
        <Button className={'bg-red-700'} >Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard