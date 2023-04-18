import React from 'react'
import IconButton from '@mui/material/IconButton';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Playlist.css'
import PlaylistSong from './PlaylistSong';


export default function Playlist() {

    const data = [
        {
            id: 1,
            title: 'Heavydirtysoul',
            author: 'Twenty One Pilots',
            time: '3:54'
        },
        {
            id: 2,
            title: 'Stressed Out',
            author: 'Twenty One Pilots',
            time: '3:22'
        },
        {
            id: 3,
            title: 'Ride',
            author: 'Twenty One Pilots',
            time: '3:34'
        },
        {
            id: 4,
            title: 'Fairly Local',
            author: 'Twenty One Pilots',
            time: '3:27'
        },
        {
            id: 5,
            title: 'Tear In My Heart',
            author: 'Twenty One Pilots',
            time: '3:08'
        },
    ]


  return (
    <div className='playlist_items'>
    <div className='playlist_top'>
        <IconButton size="large">
            <PlayCircleFilledIcon className='icon'/>
        </IconButton>    
        <IconButton size="large">
            <FavoriteBorderIcon className='icon2'/>
        </IconButton>
        <IconButton size="large">
            <MoreHorizIcon className='icon2'/>
        </IconButton>
    </div>
    <div className='playlist_list'>
        <div className='playlist_top_list'>
            <h6>#</h6>
            <h6>Title</h6>
            <div className='playlist_top_right'>
                <AccessTimeIcon/>
            </div>
        </div>
        <div className='playlist_songs'>
        {data.map((item) => (
            <PlaylistSong data={item}/>
        ))}
        </div>
    </div>


    </div>
  )
}
