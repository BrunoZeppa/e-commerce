import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PurchasesList from '../components/PurchasesList';
import { getUserPurchasesById } from '../store/slices/userPurchases.slice';
import '../styles/purchases.css'



const Purchases = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUserPurchasesById())
    }, [])

    const userPurchases = useSelector(state => state.userPurchases);

    return (
        <div className='purchases-page'>

            <div className='responsive-goback-container'>
                <div className='product-detail-title-container'>
                    <p onClick={() => navigate('/')}>Home</p>
                    <div style={{ background: "red" }} className='dot'></div>
                    <b>Purchases</b>
                </div>
                <h2> Purchases</h2>
            </div>

            <section className='purchases-container'>
                {
                    userPurchases?.length ? (
                        userPurchases.map(purchase => (
                            <PurchasesList purchase={purchase} key={purchase.id} />
                        ))

                    ) : (
                        <p className='no-purchases-message'>
                            You haven't bought anything yet. <span onClick={() => navigate("/")}>See Products</span>
                        </p>
                    )
                }
            </section>
        </div>
    );
};

export default Purchases;