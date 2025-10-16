
const users = [
  { id: 1, name: "John", role: "Designer" },
  { id: 2, name: "Sarah", role: "Developer" },
  { id: 3, name: "Mike", role: "Product Manager" },
];


const ProfileCard = ({name, role, age}) => {
  return (
    <div className=' my-6 w-80'>
        <h1 className='text-5xl'>Challenge 2</h1>
        <article className='text-2xl text-grey-400 px-3 py-3'>
            <h2 className='text-blue-400'> {name}  </h2>
            <p> is {age} years-old {role} </p>
        </article>
        
        <article>
            <h1>Challenge 3</h1>
            {users.map((user,index) => (<div key={index}> 
                {user.id} {user.name} is a {user.role}
            </div>))}
        </article>
    </div>
  )
}

export default ProfileCard