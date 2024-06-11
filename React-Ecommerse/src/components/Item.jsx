function Item () {
    return(
        {data.map(product => (
            <Card style={{ width: '30rem' }} className='card' key={product.id}>
                <figure>
                <Card.Img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Kiss-Destroyer.jpg" alt={product.nameProduct}/>
                </figure>
                <Card.Body>
                    <Card.Title>Kiss</Card.Title>
                    <Card.Text className='price'>$</Card.Text>
                    <Button variant="primary" onClick={() => onAddProduct(product)}>
                        Añadir al carrito
                    </Button>
                </Card.Body>
            </Card>
        ))}
    )
}

export default Item