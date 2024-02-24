import { ChangeEvent, useState } from "react";
import ProductCard from "./components/product-card/ProductCard"
import MyDialog from "./components/ui/Dialog";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input";
import IProductProps from "./interfaces";
function App() {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const [product, setProduct] = useState<IProductProps>({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  })


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
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
    </div>
  )

  return (
    <main className="container py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
        {renderProductsList}
      </div>
      <MyDialog isOpen={isOpen} closeModal={closeModal} title={'Add a new Product'}>
        <form className="space-y-4">
          {renderFormInputsList}
          <div className="flex items-center justify-between space-x-3">
            <Button type="submit" className={'bg-indigo-700 hover:bg-indigo-500'} >Submit</Button>
            <Button type="reset" className={'bg-gray-400 hover:bg-gray-600'} onClick={closeModal} >cancel</Button>
          </div>
        </form>
      </MyDialog>
    </main>
  )
}

export default App; 