import React from 'react'
import Chat from './Chat'
function Chats() {
    return (
        <div className='chats'>
             <Chat
              name='Atti'
              message='Hey! how are you '
              timeStamp='30 minutes ago'
              profileImage='https://assets2.rappler.com/2021/06/shutterstock-elizabeth-olsen-sq-1623224020572.jpg'
             />
               <Chat
              name='Sarah'
              message='Listen I will come.. '
              timeStamp='10 minutes ago'
              profileImage='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/081d6c77330995.5c84e75819fe9.jpg'
             />
               <Chat
              name='Jhon '
              message='Sorry I am Busy. '
              timeStamp='3 days ago'
              profileImage='https://360glitz.com/wp-content/uploads/2021/07/the-rock.jpg'
             />
               <Chat
              name='React Mug'
              message=' Helow React Mug Viewers.'
              timeStamp='30 minutes ago'
              profileImage='https://assets2.rappler.com/2021/06/shutterstock-elizabeth-olsen-sq-1623224020572.jpg'
             />
        </div>
    )
}

export default Chats
