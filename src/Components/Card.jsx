import React from 'react'

export default function Card(props) {
  var{date,mxtem,mntem}=props;
  return (
    <>
      <div className='h-48 w-48 border border-black'>
        <h1>{date.parse(12,20)}</h1>
        <h1 className='text-4xl'>{mxtem}</h1> <br/>
        <h1>{mntem}</h1>
      </div>
    </>
  )
}
