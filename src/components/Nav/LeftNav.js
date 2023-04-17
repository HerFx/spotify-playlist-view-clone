import React from 'react'
import './LeftNav.css'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function LeftNav() {

    const style = {
        marginRight: '10px',
    }

  return (
    <div className='leftNav'>
         <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='spotify logo'/>
        <nav className='nav'>
            <ul className='nav_items'>
                <li className='nav_item active'><HomeOutlinedIcon style={style}/>Home</li>
                <li className='nav_item'><SearchOutlinedIcon style={style}/>Search</li>
                <li className='nav_item'><VideoLibraryOutlinedIcon style={style}/>Library</li>
            </ul>
        </nav>
        <nav className='nav2'>
            <ul className='nav_items'>
                <li className='nav_item'><AddOutlinedIcon style={style}/>Create a playlist</li>
                <li className='nav_item'><FavoriteBorderOutlinedIcon style={style}/>Liked songs</li>
            </ul>
        </nav>

    </div>
  )
}
