import { useState } from 'react'
import { BACKLOG, READY, IN_PROGRESS, FINISHED } from '../../data'
import uniqid from 'uniqid'
import styles from './Form.module.css'

export default function Form({ title, task, setTask }) {
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [showSelect, setShowSelect] = useState(false)
  const id = uniqid()
  let buttonDisabled = false

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleMove() {
    setShowSelect(prev => !prev)
  }

  function handleClick(e) {
    e.preventDefault()
    setShowInput(showInput => !showInput)
    if (inputValue) {
      setTask(prevTask => {
        return [...prevTask, {
          id,
          status: BACKLOG,
          name: inputValue,
          description: ''
        }]
      })
    }
    setInputValue('')
  }

  function handleTaskMove(e) {
    const updatedTasks = task.map(item => {
      if (item.name === e.target.value) {
        return { ...item, status: title }
      } else {
        return { ...item }
      }
    })
    setTask(updatedTasks)
    setShowSelect(false)
  }


  if (title === READY && task.filter(item => item.status === BACKLOG).length === 0) {
    buttonDisabled = true
  }
  if (title === IN_PROGRESS && task.filter(item => item.status === READY).length === 0) {
    buttonDisabled = true
  }
  if (title === FINISHED && task.filter(item => item.status === IN_PROGRESS).length === 0) {
    buttonDisabled = true
  }


  return (
    <>
      {title === BACKLOG && showInput ?
        <form onSubmit={handleClick}>
          <div className={styles.input_container}>
            <input className={styles.input} type="text" onChange={handleChange} autoFocus />
          </div>
          <button className={styles.submit_button} >
            Submit
          </button>
        </form> : title === BACKLOG ?
          <button className={styles.add_cart_button} onClick={handleClick}>
            {/* <img src="./Plus.svg" alt="plus" /> */}
            <div className={styles.plus}>+</div>
            Add card
          </button> : null}

      {title === READY && showSelect && (
        <select className={styles.selectContainer} onChange={handleTaskMove}>
          <option>Select task</option>
          {task.filter(item => item.status === BACKLOG).map(item => {
            return <option key={item.id} value={item.name}>{item.name}</option>
          })}
        </select>
      )}

      {title === IN_PROGRESS && showSelect && (
        <select className={styles.selectContainer} onChange={handleTaskMove}>
          <option>Select task</option>
          {task.filter(item => item.status === READY).map(item => {
            return <option key={item.id} value={item.name}>{item.name}</option>
          })}
        </select>
      )}

      {title === FINISHED && showSelect && (
        <select className={styles.selectContainer} onChange={handleTaskMove}>
          <option>Select task</option>
          {task.filter(item => item.status === IN_PROGRESS).map(item => {
            return <option key={item.id} value={item.name}>{item.name}</option>
          })}
        </select>
      )}

      {title !== BACKLOG && (
        <button className={styles.add_cart_button} onClick={handleMove} disabled={buttonDisabled} >
          {/* <img src="./Plus.svg" alt="plus" /> */}
          <div className={styles.plus}>+</div>
          Add card
        </button>
      )}
    </>
  )
}