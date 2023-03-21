import React from 'react';

export default function Landing({ loginWithRedirect }) {
  return (
        <div
        className='p-5 text-center bg-image'
        style={{ 
            backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", 
            height: '400px',
            width: '100%'
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <button 
                onClick={
                    () => loginWithRedirect()
                }
                className='ripple ripple-surface btn btn-outline-primary btn-lg'
                >
                    Log in
                </button>
            </div>
          </div>
        </div>
      </div>
  );
}