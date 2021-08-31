import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';
function ChatScreen() {
    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: 'Sarah',
            message: 'Listen I will come.. ',
            profileImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/081d6c77330995.5c84e75819fe9.jpg'
        },
        {
            name: 'Sarah',
            message: 'Sorry  I am Not Coming ',
            profileImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/081d6c77330995.5c84e75819fe9.jpg',
        },
        {

            message: 'Ok... But Can you tell me why ? ',

        }
    ])
 const onClickHandler=(e)=>{
    e.preventDefault()
    setMessage([...message,{message:input}])
    setInput('')
 }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timeStamp'> YOU MATCHED WITH SARAH ON 8/30/2021 </p>
            {
                message.map((msg) => (
                    msg.name ? (
                        <div className='chatScreen__message'>
                            <Avatar
                                className='chatScreen__image'
                                alt={msg.name}
                                src={msg.profileImage} t
                            />
                            <p className='chatScreen__text'>
                                {msg.message}
                            </p>
                        </div>
                    ) : (
                        <div className='chatScreen__message'>
                        <p className='chatScreen__user'>
                            {msg.message}
                        </p>
                        </div>
                    )

                ))
            }
            <form
              className='chatScreen__form'
            >
                <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className='chatScreen__input'
                type='text'
                placeholder='Type a message...' 
                />
                <button  
                onClick={onClickHandler}
                 type='submit'
                className='chatScreen__sendButton'>
                   SEND 
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
