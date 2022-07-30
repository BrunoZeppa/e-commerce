import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slice/Purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPurchasesThunk())
    },[])

    const purchases = useSelector(state => state.purchases);

    return (
        <div>
            
        </div>
    );
};

export default Purchases;