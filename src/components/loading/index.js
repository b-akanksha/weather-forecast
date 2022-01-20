import React from 'react';
import Loading from '../../assets/loading.gif';
import './index.css';

const Loader = () => {
  return <div className='loader'>
      <img src={Loading} alt="Loading" className="loader-img" />
      <p>Loading...</p>
  </div>;
};

export default Loader;
