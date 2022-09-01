import React from 'react'
const Card = ({obj,img,count}) => {
    
  return (
   
     <div className={`card${count+1}`}>
            <div className="head1">{obj.title}</div>
            <div className="description-head1">{obj.description} </div>
            <img src={img} alt="team"/>
        </div>
      
  )
}

export default Card