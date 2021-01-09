
import { formatPrice } from './helpes';
import {ReactComponent as Pizza} from './pizza.svg';
import { Product } from './types';

type Props = {
    product : Product;
    onSelectProdutc: (product : Product) => void;
    isSelected: boolean;
}

function ProductCard({product , onSelectProdutc, isSelected }: Props){
    return (
        <div 
        className={`order-card-container ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelectProdutc(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img 
            src={product.imageUri} 
            className="order-card-image"
            alt={product.name}
            />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}
export default ProductCard;