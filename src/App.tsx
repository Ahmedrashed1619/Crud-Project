import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/product-card/ProductCard"
import MyDialog from "./components/ui/Dialog";
import { colorsList, formInputsList, productList } from "./data";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input";
import IProductProps from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ui/ErrorMsg";
import Color from "./components/ui/Color/Color";

function App() {

  // --------------------STATE-----------------
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const defaultProduct = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  }

  const defaultErrors = {
    title: '',
    description: '',
    imageURL: '',
    price: ''
  }

  const [products, setProducts] = useState<IProductProps[]>(productList);

  const [product, setProduct] = useState<IProductProps>(defaultProduct);

  const [errors, setErrors] = useState(defaultErrors);

  const [tempColors, setTempColors] = useState<string[]>([]);

  // --------------------RENDER-----------------
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const renderProductsList = products.map(product => 
    <ProductCard
      key={product.id}
      product={product}
      openModal={openModal}
    />
  )

  const renderFormInputsList = formInputsList.map(input => 
    <div key={input.id} className=" flex flex-col my-4">
      <label htmlFor={input.id} className="mb-2 font-semibold text-gray-700 text-sm">
        {input.label}
      </label>
      <Input id={input.id} name={input.name} type={input.type} value={product[input.name]} onChange={onChangeHandler} />
      {errors[input.name] && <ErrorMsg msg={errors[input.name]} />}
    </div>
  )

  const renderColorsList = colorsList.map(color =>
    <Color
      key={color}
      color={color}
      onClick={() => {
        if(tempColors.includes(color)) {
          setTempColors(prev => [...prev.filter(item => item !== color)])
          return
        }
        setTempColors(prev => [...prev, color])
      }}
    />
  )



  const submitHandler = (e: FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    const { title, description, imageURL, price} = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price
    })
    
    const hasErrorMsg = Object.values(errors).every(val => val === '');

    if(hasErrorMsg){
      console.log('trueeee');
      // send a request api to server
      setProducts(prev => [...prev, {...product, colors: tempColors}])
      setProduct(defaultProduct);
      setTempColors([])
      closeModal()
    }

    setErrors(errors);
  }

  const onCloseHandler = (): void => {
    setProduct(defaultProduct);
    closeModal();
    setErrors(defaultErrors)
  }


  return (
    <main className="container py-12">
      <div className="flex md:flex-row flex-col items-center justify-between gap-y-8 my-10">
        <h1 className=" text-5xl font-extrabold">Latest <span className=" text-indigo-700">Products</span></h1>
        <Button type='button' width="w-fit" className={'bg-indigo-700 hover:bg-indigo-500'} onClick={openModal}>Build now</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
        {renderProductsList}
      </div>
      <MyDialog isOpen={isOpen} closeModal={closeModal} title={'Add a new Product'}>
        <form className="space-y-4" onSubmit={submitHandler}>
          {renderFormInputsList}

          <div className="flex flex-wrap items-center">
            {tempColors.map(el => (
              <span key={el} className=" text-white px-2 py-1 me-1 mb-1 font-semibold text-xs rounded-md" style={{backgroundColor: el}}>
                {el}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center mb-2">
            {renderColorsList}
          </div>

          <div className="flex items-center justify-between space-x-3">
            <Button type="submit" className={'bg-indigo-700 hover:bg-indigo-500'}>Submit</Button>
            <Button type="reset" className={'bg-gray-400 hover:bg-gray-600'} onClick={onCloseHandler}>cancel</Button>
          </div>
        </form>
      </MyDialog>
    </main>
  )
}

export default App; 