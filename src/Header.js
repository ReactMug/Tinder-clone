import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header(props) {
    const history =useHistory();
    return (
        <div className='header'>
            {
                props.backButton ? (
                     <IconButton  onClick={()=>history.replace(props.backButton)}>
                        <ArrowBackIosIcon
                         fontSize='large' 
                         className='header__icon' />
                    </IconButton>
                ) : (
                    <IconButton >
                        <PersonIcon
                            className='header__icon'
                            fontSize='large'
                        />
                    </IconButton>
                )
            }
            <Link to='/'>
                <img
                    className='header__logo'
                    alt=''
                    src='https://www.pngrepo.com/png/299523/512/tinder.png'
                />
            </Link>
            <Link to='chat'>
                <IconButton>
                    <ForumIcon className='header__icon' fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
