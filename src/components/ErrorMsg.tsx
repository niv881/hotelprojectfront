import React from 'react'

interface msg{
    massage :string
}

function ErrorMsg({massage} : msg) {
  return (
    <div className='text-center text-red-600 font-semibold text-3xl p-10 '>{massage}</div>
  )
}

export default ErrorMsg