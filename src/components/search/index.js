import {useEffect, useMemo, useState} from 'react';
import ToDoList from '../todoList/ToDoList';

function Search(){

    const [inputValue,setInputValue] = useState('');
    const [users,setUsers] = useState([]);
    function handleChange(e){
        setInputValue(e.target.value);
    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(res => setUsers(res));
    },[]);

    const filtredUser = useMemo(() => {
        return users.filter((item) => item.title.includes(inputValue))
    },[inputValue])
    return (
        <div className="App">
            <div className='forInput'>
                <h3>Search ToDo List</h3>
                <input onChange={handleChange} value={inputValue} type='text' />
            </div>
            <ToDoList users={filtredUser}/>
        </div>
    )
}

export default Search;