import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-5 mb-5' >
      <img 
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" 
        alt="404 Not Found" 
        style={{ width: '50%', height: '350px', marginBottom: '15px' }}
      className=' shadow rounded'/>
      <button 
        onClick={goHome}
        className='btn p-2 bg-primary text-white fs-5 mb-5 mt-3'
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
