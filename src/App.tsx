import React, { useState, useEffect, useRef } from 'react'
import './App.scss'

const App = () => {
  const textAreaRef = useRef<any>()

  useEffect(() => {
    textAreaRef.current.focus()
  }, [])

  const [textArea, setTextArea] = useState('')
  const [tags, setTags] = useState([])

  const pickRandomTag = () => {
    const tags = Array.from(document.querySelectorAll('.tag'))
    return tags[Math.floor(Math.random() * tags.length)]
  }

  const highlightTag = (tag: any) => {
    tag.classList.add('highlight')
  }

  const unHighlightTag = (tag: any) => {
    tag.classList.remove('highlight')
  }

  const pickTag = () => {
    const times = 30

    const interval = setInterval(() => {
      const tag = pickRandomTag()

      highlightTag(tag)

      setTimeout(() => {
        unHighlightTag(tag)
      }, 100)
    }, 100)

    setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
        const tag = pickRandomTag()
        highlightTag(tag)
      }, 100)
    }, times * 100)
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value)
  }

  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      const arr: any = textArea
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => {
          return tag.trim()
        })

      setTags(arr)
      pickTag()
      setTextArea('')
    }
  }

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
