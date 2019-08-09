import React from "react"
import ReactDom from "react-dom"

export default function App(): JSX.Element {
  const sum = (a:number, b:number) : number => a + b
  return (
    <div>
        <h1>Hello!! {sum(1, 2)}</h1> 
    </div>
  )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)