import React, { useEffect, useState } from 'react';
import '../styles/productDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/home.slice';
import ImagesGallery from '../components/ImagesGallery';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { addToCartThunk } from '../store/slices/cart.slice';
import Swal from 'sweetalert2';

const ProductDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggestedProducts, setsuggestedProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)


    const { id } = useParams();

    useEffect(() => {
        const product = allProducts?.find(productItem => Number(productItem.id) === Number(id))
        setProductDetail(product)
        const filteredProducts = allProducts?.filter(productItem => productItem.category.id === product.category.id)
        setsuggestedProducts(filteredProducts)

    }, [allProducts, id])

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    console.log( productDetail?.id, quantity)

    const addToCart = (e) => {
        e.preventDefault();
        dispatch(addToCartThunk(productDetail.id, quantity));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to your cart',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const goToProductsDetail = (url) => {
        navigate(url)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <section className='product-details-container'>

            <div className='product-detail-title-container'>
                <p onClick={() => navigate('/')}>Home</p>
                <div style={{ background: "red" }} className='dot'></div>
                <b> {productDetail?.title}</b>
            </div>

            <div className='product-detail-card-container' style={{background: "white"}}>

                <div className='responsive-div'>
                    <div className='imgs-responsive'>

                        <ImagesGallery images={productDetail?.productImgs} />
                    </div>

                    <div className='info-responsive'>
                        <h5>{productDetail?.title}</h5>



                        <div className='product-detail-add-to-cart-container'>
                            <div className='price'>
                                <span>Price</span>
                                <b>$ {productDetail?.price}</b>
                            </div>
                            <div className='quantity'>
                                <span>Quantity</span>
                                <div className='quantity-selector'>

                                    <button type='button' onClick={() => setQuantity(quantity == 1 ? quantity : quantity - 1)}> - </button>
                                    <div className='quantity-number-container'>{quantity}</div>
                                    <button type='button' onClick={() => setQuantity(quantity + 1)}> + </button>

                                </div>
                            </div>
                        </div>
                        <button style={{ border: "none" }} onClick={addToCart} className='add-to-cart-button'>
                            <p>Add to cart <i className="fa-solid fa-cart-shopping"></i></p>
                        </button>

                        <p className='description'>{productDetail?.description}</p>
                    </div>

                </div>

            </div>

            <strong>Discover similar items</strong>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    suggestedProducts.map(products => (
                        <Col key={products.id}>
                            <Card onClick={() => goToProductsDetail(`../product/${products.id}`)} className="product-card">
                                <div className='image'>
                                    <Card.Img variant="top" src={products.productImgs[0]} />
                                    <Card.Img variant="top" src={products.productImgs[1]} className="over" />
                                </div>
                                <Card.Body className='info'>
                                    <Card.Title>{products.title}</Card.Title>
                                    <Card.Text><span className='price'>Price</span><span className='amount'>${products.price}</span></Card.Text>
                                    <Button className='cart-button'><i className="fa-solid fa-cart-shopping"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </section>
    );
};

export default ProductDetail;