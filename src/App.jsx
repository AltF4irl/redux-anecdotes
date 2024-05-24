import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import FilterBar from './components/FilterBar'
import Notification from './components/Notification'


const App = () => {

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