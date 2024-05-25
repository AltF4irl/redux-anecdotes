import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const FilterBar = () => {
    const dispatch = useDispatch()

    const onFilterChange = (e) => {
        const filter = e.target.value
        dispatch(filterChange(filter))
    }

    return (
        <div className='filterBar'>
            Filter
            <input 
                type="text"
                name='filter'
                onChange={onFilterChange}
            />
        </div>
    )
}

export default FilterBar