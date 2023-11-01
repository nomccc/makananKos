import React from 'react'

const Card = ({imgUrl, recipeName}) => {
  return (
    <div className=''>
      <div className='h-64 object-cover '>
        <img src={imgUrl} alt="" className='h-full w-full object-cover rounded-xl' />
      </div>
      <div className='my-4'>
        <h1 className='font text-2xl font-bold'>{recipeName}</h1>
      </div>
    </div>
  )
}

export default Card