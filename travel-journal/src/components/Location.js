import React from 'react'
import { FaPeriscope } from 'react-icons/fa'

export default function Location(props) {
    return (
        <div className='main-container'>
            <div className='main--img'>
                <img src={props.item.imageUrl}
                className='img-location' alt="" />
            </div>
            <div className='main--content'>
                <p><FaPeriscope/>{props.item.location} <span>{props.item.googleMapsUrl}</span></p>
                <h1 className='main--title'>{props.item.title}</h1>
                <p className='main--date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='main--text'>{props.item.description}</p>
            </div>
        </div>
    )
}