import React from 'react'
import SearchIcon from '../../assets/search_icon.svg'
import './search.css'

const Search = ({handleChange, query, handleSubmit}) => {
  return (
    <form className='form_container'>
      <input
        className='form_input'
        type="text"
        id='text_word'
        name='text_word'
        value={query}
        onChange={handleChange}
      />
      <img 
        className='form_search' 
        src={SearchIcon}
        onClick={handleSubmit}
        alt="lupa"
      />
    </form>
  )
}

export { Search }