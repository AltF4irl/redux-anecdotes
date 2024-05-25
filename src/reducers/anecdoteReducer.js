import { createSlice } from "@reduxjs/toolkit"


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
    createAnecdote(state, action) {
      state.push(asObject(action.payload))
      orderVotes(state)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteAction, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer