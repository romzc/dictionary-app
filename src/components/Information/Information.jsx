import React, { useContext } from 'react'
import { DictionaryContext } from '../../context/DictionaryContext'
import PlayIcon from './../../assets/play_icon.svg'
import './information.css'

const Information = ({data}) => {

    const { state } = useContext(DictionaryContext)
    const [playing, setPlaying] = React.useState(false);
    

    const handlePlay = () => {
        setPlaying(prev => !prev)
    }

    const meaningsList = data.meanings.map((mean, index) => (
        <div key={index} className="meaning_container">
            <h3 className={`part_speech text_part-${state.theme}`}>{mean.partOfSpeech}</h3>
            <p className={`part_speech_mean mean-${state.theme}`}>Meanings</p>
            <ul className={`part_list list-${state.theme}`}>
                { mean.definitions.map((item, index)=>(
                    <li key={index}>{item?.definition}</li>
                )) }
            </ul>
            { 
                mean.synonyms.length > 0 &&
                <>
                    <p className={`part_speech_mean mean-${state.theme}`}>Synonyms</p>
                    <ul className={`part_list-sa listat-${state.theme}`}>
                        {
                            mean.synonyms.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </>
            }
            {
                mean.antonyms.length > 0 &&
                <>
                    <p className={`part_speech_mean mean-${state.theme}`}>Antonyms</p>
                    <ul className={`part_list-sa listat-${state.theme}`}>
                        {
                            mean.antonyms.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </>
            }
        </div>
    ))
    

  return (
    <>
        <div className='detail_container-header'>
            <div className='header_title'>
                <h1 className={`title header_text-${state.theme}`}>{data?.word}</h1>
                <span className='header_phonetic'>{data?.phonetic}</span>
            </div>
            <div onClick={handlePlay}  className='detail_play'>
                <img 
                    className='detail_play-icon' 
                    src={PlayIcon} 
                    alt="play" 
                />
                <audio
                    loop
                    preload='auto'
                    autoPlay={playing}
                    src={data?.phonetics[0]?.audio}
                />
            </div>
        </div>
        {meaningsList}
        <img 
            src='https://rventura-bucket01.s3.amazonaws.com/imagenes/Captura+de+pantalla+2023-02-15+164832.png'
            width={650} 
        />
    </>
  )
}

export { Information }