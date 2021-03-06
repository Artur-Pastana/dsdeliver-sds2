import { checkIsSelected } from "./helpes";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products : Product[];
    selectedProducts : Product[];
    onSelectProdutc: (product : Product) => void;
}

function ProductList({ products,selectedProducts, onSelectProdutc }: Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    onSelectProdutc={onSelectProdutc}
                    isSelected={checkIsSelected(selectedProducts, product)}
                />
                ))}
            </div>
        </div>
    )
}
export default ProductList;