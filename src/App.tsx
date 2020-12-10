import React from 'react'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter when you're done{' '}
      </h3>
      <textarea placeholder='Enter Choices here' cols={30} rows={10}></textarea>
      <div className='tags'></div>
    </div>
  )
}

export default App
