import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <img 
        src="https://www.scopycode.com/includes/images/blog/404_error_page_not_found.gif" 
        alt="404 Not Found" 
        style={{ maxWidth: '90%', height: 'auto', marginBottom: '30px' }}
      />
      <button 
        onClick={goHome}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
