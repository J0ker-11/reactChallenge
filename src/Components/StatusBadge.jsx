

import React from 'react'

const StatusBadge = (props) => {
    const isActive = props.status


  return (

    <div>
        <h1 style={{backgroundColor: props.status === "active" ? "green" : "red" }}> {isActive ? "Active" : "Inactive"} </h1>
    </div>
  )
}

export default StatusBadge