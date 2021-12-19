

function ToDoList({users}){
    return(
        <div className='todoList'>
        {users.map(({id,userId,title}) => {
            return(
                <h3 key={id}>{userId}: {title}</h3>
            ) 
        })}
        </div>
    )
}

export default ToDoList;