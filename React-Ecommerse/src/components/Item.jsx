import { Button, Card } from "react-bootstrap"

function Item ({ product }) {
    
    return (
        <div>
                <Card style={{ width: '30rem' }} className='card' key={product.id}>
                    <figure>
                    <Card.Img src={product.image} alt={product.nameProduct}/>
                    </figure>
                    <Card.Body>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Title>{product.nameProduct}</Card.Title>
                        <Card.Text>'({product.category})'</Card.Text>
                        <Card.Text>{product.genre}</Card.Text>
                        <Card.Text className='price'>${product.price}</Card.Text>
                        <Button variant="primary" onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item