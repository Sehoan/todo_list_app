require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Todo = require('./models/todo')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/todos', (req, res) => {
    Todo
        .find({})
        .then(todos => {
            res.json(todos)
        })
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    Todo
        .findById(id)
        .then(todo => {
            if (todo) {
                res.json(todo)
            } else {
                res.status(404).end()
            }
        })
})

app.post('/todos', (req, res) => {
    const body = req.body
    const newTodo = Todo({
        title: body.title,
        detail: body.detail,
        finished: body.finished
    })
    newTodo.save()
        .then(savedTodo => {
            res.json(savedTodo)
        })
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    Todo.findByIdAndRemove(id)
        .then(result => {
            res.status(204).end()
        })
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id
    const updatedTodo = req.body
    Todo.findByIdAndUpdate(id, updatedTodo, {new: true})
        .then(newTodo => {
            res.json(newTodo)
        })
})

const PORT = process.env.PORT
//console.log('PORT: ', PORT)
app.listen(PORT, () => {
    console.log("server running on port ", PORT)
})
