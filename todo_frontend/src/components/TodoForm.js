import React from 'react'

const TodoForm = ({ values, handlers }) => {
    return (
        <form onSubmit={handlers.addTodo}>
            <div>
                <div>
                    ToDo title:
                </div>
                <input value={values.title} onChange={handlers.title}/>
            </div>
            <div>
                <div>
                    ToDo detail:
                </div>
                <textarea value={values.detail} onChange={handlers.detail} rows='5' cols='20'>
                </textarea>
            </div>
            <button type='submit'> add </button>
        </form>
    )
}

export default TodoForm
