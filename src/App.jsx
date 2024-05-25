import './App.css'
import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterBar from './components/FilterBar'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  },[dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <FilterBar />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App