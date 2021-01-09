import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderlocation] = useState<OrderLocationData>(); 

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
          <OrderLocation onChangeLocation={location => setOrderlocation(location)} />
      </div>
    )
}
export default Orders;