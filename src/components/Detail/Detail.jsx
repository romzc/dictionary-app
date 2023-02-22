import React, { useContext } from 'react'
import { DictionaryContext } from '../../context/DictionaryContext'
import { Information } from '../Information/Information'
import './detail.css'

const Detail = (props) => {

    const { data } = props

    const informationList = data?.map((item, index) => (
        <Information key={index} data={item} />
    ))


    return (
        <article className={`detail_container`}>
            {informationList}
        </article>
    )
}

export { Detail }