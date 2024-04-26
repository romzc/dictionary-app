import React from 'react'
import { useState, useEffect } from 'react'
import { DictionaryContext } from '../../context/DictionaryContext'
import { Detail } from '../Detail/Detail'
import { Header } from '../Header/Header'
import { Search } from '../Search/Search'
import './App.css'

function App() {
  const {state} = React.useContext(DictionaryContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  /* Estado para administrar el estado del formulario */
  const [query, setQuery] = useState("")
  /* Texto a enviar a la API. */
  const [fetchWord, setFetchWord] = useState("Keyboard")
  /* estado para administrar posibles errores */
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${fetchWord}`
        const response = await fetch(url)

        if( !response.ok) { 
          setError(true)
          setLoading(true)
        }
        else {
          const json = await response.json()
          setData(json)
          setLoading(true)
          setError(false)
      }  
    }

    try {
      fetchData()
    }
    catch ( error ) {
      setError(true)
    }
  }, [fetchWord])


  const handleChange = (event) => {
    const { value } = event.target
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) { return } /* do nothing */
    if( fetchWord == query ) { return } /* word already got */
    
    setLoading(false)
    setFetchWord(query)
    
  }



  return (
    <div className={`App background-${state.theme} ${state.font}`}>
      <Header />
      <Search 
        query={query} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      {    
        (!loading) ?
          <p className='loading-text'>Loading</p>
        :
          ( error ? 
            <p className='error-text'>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
            :
            <Detail data={data} />
          )
      }
    </div>
  )
}

export default App
