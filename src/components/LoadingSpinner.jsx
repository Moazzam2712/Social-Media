import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center " >
    <div className="spinner-border" role="status" style={{width:"5rem",height:"5rem"}}>
    </div>
        <h4 className='p-4'>Loading...</h4>
  </div>
  )
}

export default LoadingSpinner