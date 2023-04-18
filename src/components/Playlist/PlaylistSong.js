import React from 'react'

export default function PlaylistSong(props) {
  return (
    <div>
         <div className='playlist_song'>
            <h6 className='id'>{props.data.id}</h6>
            <div className='playlist_song_info'>
            <h6>{props.data.title}</h6>
            <h6>{props.data.author}</h6>
            </div>
            <div className='playlist_song_right'>
                <h6>{props.data.time}</h6>
            </div>
        </div>
    </div>
  )
}
