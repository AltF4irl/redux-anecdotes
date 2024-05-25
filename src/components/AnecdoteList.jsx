/* eslint-disable react/prop-types */
import { addVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { throwNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        return state.filter.length === 0
        ? state.anecdotes
        : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })
    const dispatch = useDispatch()
    
    const vote = (id) => {
        const votedAnecdote = anecdotes.filter(anec => anec.id === id)
        const votedAnecdoteContent = votedAnecdote.map(vanec => vanec.content)
        console.log('votedanecdote', votedAnecdote, id)
        dispatch(addVote(votedAnecdote[0]))
        dispatch(throwNotification(`You have voted for "${ votedAnecdoteContent }"`, 5))
    }

    const Anecdote = ({anecdote}) => {
        return(
            <div>
                <div>
                    {anecdote.content}
                </div>
                <div className='vote'>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )
    }
    
    return(
        <div>
            {anecdotes.map(anecdote =>
                    <Anecdote 
                        key={anecdote.id} 
                        anecdote={anecdote} 
                    />
            )}
        </div>
    )
}

export default AnecdoteList