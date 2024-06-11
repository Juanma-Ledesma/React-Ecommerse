import { data } from '../data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getItems, getItemsFromCategory } from '../firebase/db';

export const  ItemList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div>
			{data.map(product => (
				<Card style={{ width: '30rem' }} className='card' key={product.id}>
					<figure>
					<Card.Img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Kiss-Destroyer.jpg" alt={product.nameProduct}/>
					</figure>
					<Card.Body>
						<Card.Title>{product.nameProduct}</Card.Title>
						<Card.Text className='price'>${product.price}</Card.Text>
						<Card.Text>{product.description}</Card.Text>
						<Button variant="primary" onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};