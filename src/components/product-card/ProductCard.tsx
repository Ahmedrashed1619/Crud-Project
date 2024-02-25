import imgTest from '../../assets/images/default-img.png';
import IProductProps from '../../interfaces';
import { txtSlicer } from '../../utils/functions';
import Button from '../ui/Button/Button';
import Color from '../ui/Color/Color';
import Image from '../ui/Image/Image';

interface IProps {
  product: IProductProps,
  openModal: () => void
}
const ProductCard = ({product, openModal}: IProps) => {

  const {imageURL, title, description, price, colors, category} = product

  return (
    <div className="max-w-sm mx-auto border-2 p-2 rounded-md">
      <div className="overflow-hidden">
        <Image imageUrl={imageURL ? imageURL : imgTest} alt={title} className="rounded-md h-56 w-full lg:object-cover transition-all duration-1000 hover:scale-125" />
      </div>
      <h3 className='text-lg font-semibold my-2' title={title}>{txtSlicer(title, 25)}</h3>
      <p className='text-sm text-gray-500 break-words mb-4' title={description}>{txtSlicer(description, 80)}</p>
      <div className="flex flex-wrap items-center mb-2">
        {colors.length > 0 ?
          colors.map((color, i) => (
            <Color key={i} color={color} />
          ))
          :
          <Color color={''} />
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
        <Button className={'bg-indigo-700 hover:bg-indigo-500'} onClick={openModal} >Edit</Button>
        <Button className={'bg-red-700 hover:bg-red-900'} >Delete</Button>
      </div>
    </div>    
  )
}

export default ProductCard