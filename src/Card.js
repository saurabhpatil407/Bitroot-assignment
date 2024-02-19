import React from 'react'

const Card = (props) => {
  return (
    <>

      <div className='card'>
        <div>
          <img src={props.src} alt='myimage' />
        </div>
        <div className='content'>
          <div className='symbol'>
            <p className='skyblue'></p>
            <p className='orange'></p>
          </div>
          <h1 className='title'>{props.title}</h1>
          <p className='details'>{props.content}</p>
          <div className='foot-details'>
            <p className='author'>{props.authorname}-{props.role}</p>
            <p className='date'>{props.date}</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Card
