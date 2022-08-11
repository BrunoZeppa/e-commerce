import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import { filterCategoryThunk, filterTitleThunk, getProductsThunk } from '../store/slices/home.slice';
import '../styles/home.css'



const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('');

    const [categories, setCategories] = useState([]);


    const capitalizeFirstLetter = (string) => {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }

    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/')
            .then(res => setCategories(res.data.data.categories))
    }, [])

    const goToProductsDetail = (url) => {
        navigate(url)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Type a product brand.."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearchValue(e.target.value)}
                    value={capitalizeFirstLetter(searchValue)}
                    style={{ marginLeft: "20%", marginTop: "7%", marginBottom: "2%" }}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={() => dispatch(filterTitleThunk(searchValue))}
                    style={{ marginRight: "20%", marginTop: "7%", marginBottom: "2%" }}>
                    search
                </Button>
            </InputGroup>
            <Banner />
            <main>
                <Row>
                    <Col lg={2}>
                        <ListGroup>
                            <ListGroup.Item onClick={() => dispatch(getProductsThunk())} style={{ cursor: "pointer" }}> Show all</ListGroup.Item>
                            {
                                categories.map(category => (
                                    <ListGroup.Item key={category.id} onClick={() => dispatch(filterCategoryThunk(category.id))} className="categories">{category.name}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col >
                    <Col >


                        <Row xs={1} md={2} lg={4} className="g-4">
                            {
                                products.map(product => (
                                    <Col key={product.id}>
                                        <Card onClick={() => goToProductsDetail(`/product/${product.id}`)} className="product-card">
                                            <div className='image'>
                                                <Card.Img variant="top" src={product.productImgs[0]} />
                                                <Card.Img variant="top" src={product.productImgs[1]} className="over" />
                                            </div>
                                            <Card.Body className='info'>
                                                <Card.Title className='product-title'>{product.title}</Card.Title>
                                                <Card.Text><span className='price'>Price</span><span className='amount'>${product.price}</span></Card.Text>
                                                <Button className='cart-button'><i className="fa-solid fa-cart-shopping"></i></Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col >
                </Row>
            </main>
        </>
    );
};

export default Home;

