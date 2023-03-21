import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
     <h1 className='dark:text-red-600 text-4xl'>Hello World!</h1>
    </div>
  )
}

export default App
