import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchData = () => {
    fetch(`http://localhost:${import.meta.env.VITE_PORT}/`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error))
  }

  const handleLogHello = () => {
    fetch(`http://localhost:${import.meta.env.VITE_PORT}/log-hello`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setLogMessage(data.message);
        setTimeout(() => setLogMessage(''), 3000);
      })
      .catch(error => console.error('Error logging hello:', error))
  }

  const [message, setMessage] = useState<string>('')
  const [logMessage, setLogMessage] = useState<string>('')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={handleLogHello}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          aria-label="Log hello world to console"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleLogHello()}
        >
          Log "Hello World!" to Server Console
        </button>
        {logMessage && (
          <p className="mt-2 text-green-600">{logMessage}</p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={fetchData}>
        Click to fetch from Go server
      </button>
      {message && (
        <div>
          <h2>Server Response:</h2>
          <p>{message}</p>
        </div>
      )}
    </>
  )
}

export default App
