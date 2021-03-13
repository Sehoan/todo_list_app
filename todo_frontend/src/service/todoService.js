import axios from 'axios'

const baseUrl = '/todos'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newTodo => {
    const request = axios.post(baseUrl, newTodo)
    return request.then(response => response.data)
}
const erase = id => {
    return axios.delete(baseUrl+`/${id}`)
}
const complete = (id, updatedTodo) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedTodo)
    return request.then(response => response.data)
}

const requests = { getAll, create, erase, complete }

export default requests
