import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'


const orderVotes = (votesArray) => {
  return votesArray.sort((a, b) => b.votes - a.votes)
}


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAction(state, action) {
      const id = action.payload
      const newState = state.map( anec => anec.id === id ? {... anec, votes: anec.votes + 1} : anec )
      const sortedNewState = orderVotes(newState)
      return sortedNewState
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
      orderVotes(state)
    },
    setAnecdotes(state, action) {
      return orderVotes(action.payload)
    }
  }
})

export const { appendAnecdote, voteAction, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const initAnecs = await anecdoteService.getAll()
    dispatch(setAnecdotes(initAnecs))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const anecdoteObject = {
      content: anecdote,
      votes:0
    }
    const returnedAnecdote = await anecdoteService.create(anecdoteObject)
    dispatch(appendAnecdote(returnedAnecdote))
  }
}

export default anecdoteSlice.reducer