import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
/**
 * Todo
 * Renders todos
 * @param {object} props
 */
const Todo = (props) => (
  <div className="todo">
    {
      props.todos.map((value) => (
        <ListItem key={value.id}>
          <ListItemText
            primary={`${value.id}.${value.title}`}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => props.deleteTodo(value.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    }
  </div>
)

/**
 * propTypes
 * @property {array} todos - Array of all the todos.
 * @property {boolean} isLoading - Flag when request is loading.
 * @property {function} deleteTodo - Function to delete todos.
 */
Todo.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
}


export default Todo
