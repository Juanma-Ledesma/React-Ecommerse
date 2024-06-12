import Item from './Item'

function ItemList({ products }) {

	return (
		<>
			{products.mp(product => (
				<Item product={product} key={product.id} />

			))}
		</>
	)
}

export default ItemList