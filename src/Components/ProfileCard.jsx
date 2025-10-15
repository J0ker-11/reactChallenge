

import React from 'react'

const ProfileCard = ({name, role, age}) => {
  return (
    <div className=' my-6 w-80'>
        <h1 className='text-5xl'>Challenge 2</h1>
        <article className='text-2xl text-grey-400 px-3 py-3'>
            <h2 className='text-blue-400'> {name}  </h2>
            <p> is {age} years-old {role} </p>
        </article>
    </div>
  )
}

export default ProfileCard