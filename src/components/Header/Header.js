import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>  
            <div className='title'>
            <img src='./img/album.jpg' alt='album cover' className='album'/>
            <div className='album_info'>
                <h4>Album</h4>
                <h1 className='author'>Blurryface</h1>
                <p>Twenty One Pilots | 2015 | 14 songs</p>           
            </div>
            </div>
        </div>

    </div>
  )
}
