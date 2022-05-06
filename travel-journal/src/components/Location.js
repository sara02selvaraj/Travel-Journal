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
                <p><FaPeriscope className='main--icon'/><span className='main--location'>{props.item.location} </span>
                <a href={props.item.googleMapsUrl} className='main--link'>View on Google Maps</a></p>
                <h1 className='main--title'>{props.item.title}</h1>
                <p className='main--date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='main--text'>{props.item.description}</p>
            </div>
        </div>
    )
}