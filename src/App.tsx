import ProductCard from "./components/product-card/ProductCard"
import { productList } from "./data";
function App() {

  const renderProductsList = productList.map(product => 
    <ProductCard
      key={product.id}
      product={product}
    />
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
      {renderProductsList}
    </div>
  )
}

export default App; 