import { useSelector, useDispatch } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatcher = useDispatch()
  dispatcher(setNotification('lololo'))
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification