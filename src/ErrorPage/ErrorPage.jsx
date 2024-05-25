import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorimg from '../assets/images/error.jpg'
import { Button } from 'react-bootstrap'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className=''>
      <div className=' d-flex justify-content-center align-items-center'>
        <img className='img-fluid w-50 mt-5 rounded-5' src={errorimg} alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only fs-1'>Error</span> {status || 404}
          </h2>
          <p className='fs-3 ms-3'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='btn-view'
          >
            <Button>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
    
export default ErrorPage;