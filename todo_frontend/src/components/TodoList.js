import React from 'react'

const TodoList = ({list, deleteHandler, completeHandler}) => {
    const detailStyle =
    {
        fontSize: "0.8rem", color: "grey"
    }
    const checkComplete = todo => todo.finished ? {color: 'blue'} : {}

    return (
        <ul>
            {list.map(todo => (
                <li key={todo.title}>
                    {todo.title}
                    <button type="button" style={checkComplete(todo)} onClick={completeHandler} id={todo.id}>
                        completed
                    </button>
                    <button type="button" onClick={deleteHandler} id={todo.id}>
                        delete
                    </button>
                    <p style={detailStyle}>{todo.detail}</p>
                </li>
            )
            )}
        </ul>
    )
}

export default TodoList;

