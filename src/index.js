import React, { forwardRef, useRef } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const buttonRef = useRef(null)
  return (
    <div>
      <Button ref={buttonRef}>按钮</Button>
    </div>
  )
}

const Button = forwardRef((props, ref) => {
  return <button ref={ref} {...props} />
})

ReactDOM.render(<App />, document.getElementById('root'))
