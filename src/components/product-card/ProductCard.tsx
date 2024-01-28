import imgTest from '../../assets/images/Rectangle 49 (20).png';
import Button from './Button';
import Color from './Color';
import Image from './Image';

const ProductCard = () => {
  return (
    <div className="border-2 p-2 rounded-md">
      <Image imageUrl={imgTest} alt={"product-name"} className={'rounded-md mb-2 w-full max-h-64'} />
      <h2 className='font-semibold'>Iphone 14 pro max</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, alias?</p>
      <div className="flex items-center my-4 space-x-2">
        <Color className={'bg-yellow-600'} />
        <Color className={'bg-red-600'} />
        <Color className={'bg-blue-600'} />
      </div>
      <div className="flex items-center justify-between mb-3">
        <h4>$500.000</h4>
        <Image imageUrl={imgTest} alt={"product-name"} className={'w-10 h-10 object-center rounded-full'} />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <Button title={'Edit'} className={'bg-indigo-700'} />
        <Button title={'Delete'} className={'bg-red-700'} />
      </div>
    </div>
  )
}

export default ProductCard