import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box'>
      <div className='details flex '>
          <div className='img'>
            <img src={props.profile} alt='' />
          </div>
          <div className='name'>
            <h3>{props.name}</h3>
            <span>{props.post}</span>
          </div>
        </div>
        <i className='fa fa-quote-left comment'></i>
        <div className='para'>
          <p>{props.desc}</p>
        </div>
        <hr />
        
      </div>
    </>
  )
}

export default Card
