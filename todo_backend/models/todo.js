const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log(url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error occurred while accessing database')
    })

const todoSchema = mongoose.Schema({
    title: String,
    detail: String,
    finished: Boolean
})

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
module.exports = mongoose.model('Todo', todoSchema)
