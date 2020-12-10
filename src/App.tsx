import React, { useState, useEffect, useRef } from 'react'
import './App.scss'

const App = () => {
  const textAreaRef = useRef<any>()

  useEffect(() => {
    textAreaRef.current.focus()
  }, [])

  const [textArea, setTextArea] = useState('')
  const [tags, setTags] = useState([])

  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const arr: any = textArea
        .trim()
        .split(',')
        .map((tag) => {
          return tag.trim()
        })

      setTags(arr)
      setTextArea('')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value)
  }

  const pickTag = () => {}

  return (
    <div className='app'>
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter when you're done.
      </h3>

      <textarea
        placeholder='Enter Choices here'
        cols={30}
        rows={10}
        onKeyUp={onKeyUp}
        value={textArea}
        onChange={onChange}
        ref={textAreaRef}></textarea>

      <div className='tags'>
        {tags.map((tag, index) => (
          <p className='tag' key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App
