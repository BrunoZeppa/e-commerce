import React from 'react';
import '../styles/loadingScreen.css'
import Spinner from 'react-bootstrap/Spinner';

const LoadinScreen = () => {
    return (
        <div className="overlay">
      <Spinner animation="grow" variant="secondary" />
    </div>
    );
};

export default LoadinScreen;