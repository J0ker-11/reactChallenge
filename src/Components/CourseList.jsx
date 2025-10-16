
const courses = [ 

    {id: 1, title: "React Basics", level: "Beginner"},
    {id: 2, title: "React Hooks", level: "Intermediate"},
    {id: 3, title: "React Project Build", level: "Advanced"},
]







const CourseList = () => {

  return (
    <div>
        <h1 className='text-2xl'>CHALLENGE 5</h1>
        {courses.map((course,index) => ( 
            <div key={index} >
                <h1> {course.id} {course.title} {course.level === "Advanced" && <span>🔥Advanced level</span>} </h1>
                
            </div>
        ))}
    </div>
  )
}

export default CourseList