/src
/src/index.tsx
/index.html
/webpack.config.js
- touch index.html webpack.config.js .babelrc
- index.html `<div id="app-root"></div>`, `<script src="bundle.js"></script>`
- npm i @babel/core @babel/preset-react @babel/preset-env @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader react react-dom typescript @types/node @types/react @types/react-dom


# React Interview Question and answers

## Name Lifecycle Methods and their purpose
16.4+

phase 1. render

- constructor
  - only once setInitial state, this.state={}
- static getDerviedStateFromProps
  - componentWillReceiveProps, initial render and rerender phase, get derive state from the change in props
  - why is a static method, you don't want user to access this keyword directly inside the method(no access to 'this')
  - static method are actually class method not instance which means you know I do you cannot do like this dot some method name and so you cannot execute that so you cannot directly set state using this set state
- render
  - mandatory, cannot setState here otherwise you go in an infinite loop
- componentDidMount
  - 3 party dom ready make changes accordingly(相應地)

phase 2. re-render
- static getDerivedStateFromProps
  - get your state from props
- shouldComponentUpdate
  - make a decision that do you really need to update, compare state then return true or false(no render)
- render
  - getSnapshotBeforeUpdate(componentWillUpdate), lazy loading
- componentDidUpdate

- componentWillUnmount
  - die

## why do we use arrow function in react? why and why not?
you have to differentiate what is a method and what is a property
arrow function don't have its own "this", lexical scope
experimental syntax

## how to prevent components from re-rendering.

react hook
uses
useEffect
hook

2 phases when you on redner component
- initRender
- rerender


## REDUX

Store is a front end database which in memory somewhere

Actions: a component will trigger a function which start some action

Reducer: Action will go into a reducer, look what has to do in the store

Store: one Reducer demand that store and component can read it