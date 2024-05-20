/* eslint-disable react/prop-types */
import { voteAction } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAction(id))
    }

    const Anecdote = ({anecdote}) => {
        return(
            <div>
                <div>
                    {anecdote.content}
                </div>
                <div>
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