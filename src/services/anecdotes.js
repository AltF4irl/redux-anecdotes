import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const create = async (object) => {
    const anecdote = object
    const res = await axios.post(baseUrl, anecdote)
    return res.data
}

const edit = async (id, anecdoteObject) => {
    const res = await axios.put(`${baseUrl}/${id}`, anecdoteObject)
    return res.data
}

export default {
    getAll,
    create,
    edit
}