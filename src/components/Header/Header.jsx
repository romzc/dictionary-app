import React from 'react'
import LibraryIcon from '../../assets/library_icon.svg'
import { DictionaryContext } from '../../context/DictionaryContext';
import './header.css'

const Header = () => {

    const {state, changeBackground,changeFont} = React.useContext(DictionaryContext);

    return (
        <header className={`header_container`}>
            <div>
                <img 
                    className={`icon-${state.theme}`}
                    width={30} 
                    src={LibraryIcon} 
                    alt="library" 
                />
            </div>
            <form className='form_state_header'>

                <select 
                    name="font" 
                    id="font"
                    onChange={changeFont}
                >
                    <option value="serif">Serif</option>
                    <option value="sans_serif">Sans Serif</option>
                    <option value="monospace">Monospace</option>
                </select>

                
                <input 
                    type="checkbox" 
                    id='theme' 
                    name='theme' 
                    value='dark'
                    checked={state.theme === "dark"}
                    onChange={changeBackground}
                />
                <label 
                    className={`toggleTheme theme-${state.theme}`}
                    htmlFor="theme">
                </label>

            </form>
        </header>
    )
}

export { Header }