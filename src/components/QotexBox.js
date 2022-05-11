import React from 'react'
import './css/qotexBox.css'


const QotexBox = ({p}) => {
  
    return(
        
        <div className= "tarjet">
            <main>
                <div>
                    <p>{p.quote}</p>
                </div>
                <div>
                    <h4>{p.author}</h4>
                </div>
            </main> 
        </div>
    
    
    )


}

export default QotexBox