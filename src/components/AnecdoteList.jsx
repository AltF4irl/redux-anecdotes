/* eslint-disable react/prop-types */
import { voteAction } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        return state.filter.length === 0
        ? state.anecdotes
        : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })
    const dispatch = useDispatch()
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAction(id))
        const votedAnecdoteContent = anecdotes.filter(anec => anec.id === id).map(vanec => vanec.content)
        dispatch(setNotification(`You have voted for "${ votedAnecdoteContent }"`))
        setTimeout(() => {
            dispatch(unsetNotification(true))
        }, 5000);
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