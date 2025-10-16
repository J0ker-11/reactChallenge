import React from 'react'


const MessagePopUp = () => {
    const notification = [
        {text: "Welcome"}
    ]
    
  return (
    <div>
        {notification.length > 0 && <p>You have a notifications</p> }
        {notification.length > 0 ? <p>You have a notifications</p> : <p>No new notifications</p> }
        {notification.length > 0 && <p>You have a {notification.length} alerts </p> }
        {notification.map((notify,index) => (
            <p key={index}> {notify.text} </p>
        ) )}
    </div>
  )
}

export default MessagePopUp