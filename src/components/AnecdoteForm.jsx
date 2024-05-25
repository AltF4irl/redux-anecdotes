import {createAnecdote} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotification, unsetNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        const anecdoteObject = {
            content: anecdote,
            votes:0
        }
        const createdAnecdote = await anecdoteService.create(anecdoteObject)
        dispatch(createAnecdote(createdAnecdote))
        dispatch(setNotification(`You have created "${ anecdote }"`))
        setTimeout(() => {
            dispatch(unsetNotification(true))
        }, 5000);
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