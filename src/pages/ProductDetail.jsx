import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slice/home.slice';

const ProductDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggestedProducts, setsuggestedProducts] = useState([]) ; 
    const navigate = useNavigate();
    const dispatch = useDispatch(); 


    const {id} = useParams();
    
    useEffect(() =>{
        const product = allProducts?.find(productItem => Number(productItem.id) === Number(id))
        setProductDetail(product)
        const filteredProducts = allProducts?.filter(productItem => productItem.category.id === product.category.id)
        setsuggestedProducts(filteredProducts)
    },[allProducts, id])
    
    useEffect(()=> {
        dispatch(getProductsThunk())
    },[])

    console.log(productDetail)
    
    
    
    return (
        <div>
            <h1>Product Detail</h1>
            <img src={productDetail?.productImgs?.[0]} alt="" />
            <p>{productDetail?.description}</p>
            <ul>
                {
                    suggestedProducts.map(products => (
                        <li onClick={() => navigate(`/product/${products.id}`)} key={products.name}>
                            {products.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductDetail;