import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoItem = (props) =>{

   const statusHandler = (status) =>{
       const todo = props.todo;
       todo.completed = status.target.checked;
       props.updateTodo(todo)
    }

   return (
    <li class="list-group-item border-0 d-flex align-items-center ps-0">
        <input 
            class="form-check-input me-3" 
            type="checkbox" value="" 
            aria-label="..." 
            onChange={(event) => statusHandler(event)}
        />
       {
        props.todo.completed ? <s>{props.todo.name}</s> : props.todo.name
       }

     <FontAwesomeIcon className='text-end' icon={faTrash} onClick={() => {
         props.deleteTodo(props.todo.id)
     }} />

        
    </li>
    )
}

TodoItem.prototype = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
