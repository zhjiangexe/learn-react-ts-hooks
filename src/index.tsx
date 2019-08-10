import React, {Fragment, useState} from 'react'
import ReactDom from 'react-dom'
import {Parent, Child} from './App'

// refers another type, type can not extends
type FormElem = React.FormEvent<HTMLFormElement>

// new type, you can extends
interface ITodo {
  text: string
  complete: boolean
}

interface ITodo2 extends ITodo {
  tag: string[]
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }
  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }
  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }
  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div>
              <span
                style={{textDecoration: todo.complete ? 'line-through' : null}}
              >
                {todo.text}
              </span>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todo.complete ? 'incomplete' : 'Complete'}
              </button>
              <button type="button" onClick={(): void => removeTodo(index)}>
                &times;
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)

