import { useState } from "react";
import ProductCard from "./components/product-card/ProductCard"
import MyDialog from "./components/ui/Dialog";
import { productList } from "./data";
import Button from "./components/ui/Button/Button";
function App() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const renderProductsList = productList.map(product => 
    <ProductCard
      key={product.id}
      product={product}
      openModal={openModal}
    />
  )

  return (
    <main className="container py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-5">
        {renderProductsList}
      </div>
      <MyDialog isOpen={isOpen} closeModal={closeModal} title={'Edit a Product'}>
        <div className="flex items-center justify-between space-x-3 mt-3">
          <Button className={'bg-indigo-700 hover:bg-indigo-500'} >Submit</Button>
          <Button className={'bg-gray-400 hover:bg-gray-600'} onClick={closeModal} >cancel</Button>
        </div>
      </MyDialog>
    </main>
  )
}

export default App; 