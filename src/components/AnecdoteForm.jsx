import {createAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { throwNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(throwNotification(`You have created "${ anecdote }"`, 5))
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                <input 
                    name='anecdote'
                    type='text'
                />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm