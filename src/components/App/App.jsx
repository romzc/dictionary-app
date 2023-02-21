import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/work")
      const json = await response.json()
      setData(json)
    }
  
    fetchData()
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
