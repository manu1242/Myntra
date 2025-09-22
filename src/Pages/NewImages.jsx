import React from 'react'
import Images from '../Data/Images'
import LastImages from '../Data/LastImages'
import './NewImages.css'


export default function NewImages() {
  
  return (
    <>
     <img className="banner" src   ="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/yWDADr92_51fa11b1d6174d83ab725900382a4a67.jpg"/>
      <div className="img">
        {Images.map(image => (
          <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
        ))}
      </div>
      <div className="Lastimg">
        {LastImages.map(image => (
          <img key={image.id} src={image.url} alt={`LastImage ${image.id}`} />
        ))}
      </div>
      <img className="banner2" src ="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/SEPTEMBER/17/KeINztwQ_62d5e1201f494f9b85cded30a4b1c44c.jpg"/>
    </>
  )
}
