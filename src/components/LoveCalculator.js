import React from 'react'
import { useState } from 'react'

export default function LoveCalculator() {
  
  const [input1, setInput1]= useState('')
  const [input2, setInput2]= useState('')
  const [loveComment, setLoveComment]= useState('')

  


function generate (event){
  event.preventDefault();
  let random = Math.floor(Math.random()*100)
  if(input1 ==' ' || input2==''){
    alert('fill the text boxes please')
  }
  
  else if(random >=0 && random <=33){
    
      setLoveComment(`compatibility of ${random}%  🚫👎🏽 ❌you two matching is just gna produce the most useless off springs in the world`)
    
  }
  else if(random >=31 && random <=66){
    
      setLoveComment(` compatibility of ${random}% your connedtion is average and i am sure if you work together you can better it, good luck `)
    
  }

  else if(random >=61 && random <=100){
    
    setLoveComment(`compatibility of ${random}% 🎉🥳🎉 congratulationssss, you two are amazing togetherrrr, please invite me to your wedding` )
  
}

setInput1('')
setInput2('')
}


  return (
    <div className='div'>

      <form onSubmit={generate} className='form'>
        <div className=' love'>
            <span className='heart'></span>
            <h1 className='header'>calculator</h1>
        </div>

        <div className='input-Lables'>
           
          
          <input 
          type='text'
          onChange={(event)=>{setInput1(event.target.value)}}
          value={input1}  
          className='input '
          placeholder='Enter a your name' />
        </div>

        <div className='input-Lables'> 
            
          <input 
          type='text'
          onChange={(event)=>setInput2(event.target.value)}
          value={input2}
          className='input' 
          placeholder='Enter your partners name'/> 
        </div>
          <br/>
          <p className='p'>{loveComment}</p>
          <button className='btn' type='sumbit' >Find compatibility</button>
        
      </form>

      
    </div>
  )
}
