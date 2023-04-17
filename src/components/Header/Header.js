import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <img src='./img/album.jpg' alt='album cover' className='album'/>
            <div className='album_info'>
                <h1>Album Name</h1>
                <p>Artist Name</p>
                <p>Release Date</p>
            </div>
        </div>

    </div>
  )
}
