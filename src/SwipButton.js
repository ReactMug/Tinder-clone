import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipButton.css'
import IconButton from '@material-ui/core/IconButton';


function SwipButton() {
    return (
        <div className='swipButton'>
            <IconButton className='swipButton__repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton >
            <IconButton className='swipButton__left'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipButton__star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipButton__right'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipButton__lightning'>
                <FlashOnIcon fontSize='large' />
            </IconButton>


        </div>
    )
}

export default SwipButton
