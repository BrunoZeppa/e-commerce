import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PurchasesList = ({purchase}) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options);

    return (
        <Container fluid="md" className='purchase-list'>
            <div className="header">
                <b>{ date }</b>
            </div>
            <Row className='purchase-products-list'>
            {
                purchase.cart.products.map(productItem => (
                    <Col 
                        key={productItem.id}
                        onClick={() => navigate(`/product/${productItem.id}`)}
                        className='product-item'
                    >
                        <div className="name">
                            {productItem.title}
                        </div>
                        <div className="quantity">
                            <div className="box">{productItem.productsInCart.quantity}</div>
                        </div>
                        <div className="price">
                            $ {productItem.price}
                        </div>
                    </Col>
                ))
            }
            </Row>
            
        </Container>
    );
};

export default PurchasesList;