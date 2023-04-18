import React from 'react'
import './BottomNav.css'
import { Grid } from '@mui/material'
import Slider from '@mui/material/Slider'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export default function BottomNav() {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className='bottom'>
        <di className='bottom__left'>
            <img src='./img/album.jpg' alt=''  className='bottom_img'/>
            <div className='bottom__songInfo'>
                <h4>Stressed Out</h4>
                <p>Twenty One Pilots</p>
            </div>
        </di>
        <div className='bottom__center'>
            <ShuffleIcon className='btn' />
            <SkipPreviousIcon />
            <PlayCircleOutlineIcon fontSize='large' className='bottom__icon' />
            <SkipNextIcon />
            <RepeatIcon className='btn' />
        </div>
        <div className='bottom__right'>
       
        <PlaylistPlayIcon className='bottom__icon'/>
        <Box sx={{ width: 180 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} style={{color:'white'}}/>
        <VolumeUp />
        </Stack>
        </Box>
        </div>
    </div>
  )
}
