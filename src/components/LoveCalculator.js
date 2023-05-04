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
    
      setLoveComment(`compatibility of ${random}% you two matcbing is just gna produce the most useless off springs in the world`)
    
  }
  else if(random >=31 && random <=66){
    
      setLoveComment(` compatibility of ${random}% meh, its ok, you can be together, but i am telling you, you are better off without each other, go marry a rock or something`)
    
  }

  else if(random >=61 && random <=100){
    
    setLoveComment(`compatibility of ${random}% chuuu chuuu, congratulationssss, you two are amazing togetherrrr, please invite me to your wedding` )
  
}

setInput1('')
setInput2('')
}


  return (
    <div className='div'>

      <form onSubmit={generate} className='form'>
        <h1 className='header'>
          <span className='heart'></span>
          calculator
          </h1>
       
      <input 
      type='text'
      onChange={(event)=>{setInput1(event.target.value)}}
      value={input1}  
      className='input'
      placeholder='Enter your Name' />

      <input 
      type='text'
      onChange={(event)=>setInput2(event.target.value)}
      value={input2}
      className='input' 
      placeholder='Enter your Partners name'/> 
      <br/>
      <p className='p'>{loveComment}</p>
      <button className='btn' type='sumbit' >generate</button>
      
      </form>

      
    </div>
  )
}
