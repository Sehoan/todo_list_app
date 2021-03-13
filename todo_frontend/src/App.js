import React from 'react'
import {useState, useEffect} from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Heading from './components/Heading'
import todoService from './service/todoService'

const App = () => {

    const [list, setList] = useState([])
    const [newTitle, setTitle] = useState('')
    const [newDetail, setDetail] = useState('')

    useEffect(() => {
        todoService.getAll()
            .then(lists => setList(lists))
    }, [])

    const addTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            title: newTitle,
            detail: newDetail,
            finished: false
        }
        todoService.create(newTodo)
            .then(addedTodo => {
                setList(list.concat(addedTodo))
            })
        setTitle('')
        setDetail('')
    }
    const eraseTodo = (event) => {
        const id = event.target.id
        todoService.erase(id)
            .then(response => {
                setList(list.filter(todo => todo.id !== id))
            })
    }
    const completeTodo = (event) => {
        const id = event.target.id
        event.target.style.color = 'blue'

        const search = list.find(todo => todo.id === id)
        const updatedTodo = {
            title: search.title,
            detail: search.detail,
            finished: true
        }
        todoService.complete(id, updatedTodo)
            .then(newTodo => {
                setList(list.map(todo => todo.id === id ? newTodo : todo))
            })
    }

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const detailHandler = (event) => {
        setDetail(event.target.value)
    }

    const values = {
        title: newTitle,
        detail: newDetail
    }
    const handlers = {
        title: titleHandler,
        detail: detailHandler,
        addTodo: addTodo
    }

    return (
        <div>
            <Heading list={list} />
            <TodoForm values={values} handlers={handlers} />
            <TodoList list={list} deleteHandler={eraseTodo} completeHandler={completeTodo} />
        </div>
    )
}
export default App
