import React from 'react'
import Countdown from './components/contador'

function App() {
  const targetDate = "2025-01-22T00:00:00";
  return (
    <div className="app">
      <Countdown targetDate={targetDate} />
    </div>
  )
}

export default App
