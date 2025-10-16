import { useState } from "react"


const LoginStatus = () => {
    
const [isLogIn,setIsLogin] = useState(false)
const [lastLoginTime, setLasLoginTime] = useState(null)

const handleLogin = () => {
    setIsLogin((prev) =>  {
        if(!prev) {
            setLasLoginTime(new Date().toLocaleDateString())
        }
        return !prev
    })
}


  return (

    <div>
        <h1>CHALLENGE 2</h1>
         {isLogIn ? <p>Welcome back User!</p> : <p>Please log in to continue</p> }
         {isLogIn && lastLoginTime && <p>Last Login Time: {lastLoginTime} </p> }
        <button style={{ padding: "8px 14px", background: isLogIn ? "crimson" : "green", color: "white", borderRadius: "6px", cursor: "pointer" }} onClick={handleLogin}> {isLogIn ? "Logout" : "Login"} </button>
       
    </div>
  )
}

export default LoginStatus