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

  const [product, setProduct] = useState<IProductProps>(defaultProduct);

  const [errors, setErrors] = useState(defaultErrors);

  const [tempColors, setTempColors] = useState<string[]>([]);

  console.log(tempColors);
  


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

  const renderProductsList = productList.map(product => 
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
      onClick={() => setTempColors(prev => [...prev, color])}
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
      return
    }

    setErrors(errors);
  }

  const onCloseHandler = (): void => {
    setProduct(defaultProduct);
    closeModal();
    setErrors(defaultErrors)
  }


  return (
    <main className="container py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
        {renderProductsList}
      </div>
      <MyDialog isOpen={isOpen} closeModal={closeModal} title={'Add a new Product'}>
        <form className="space-y-4" onSubmit={submitHandler}>
          {renderFormInputsList}
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