import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
    console.log('componente orders iniciou')
  }, []);

    return(
      <div className="orders-container">
          <StepsHeader />
          <ProductList products={products} />
      </div>
    )
}
export default Orders;