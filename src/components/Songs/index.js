import './index.css'
import {RiDeleteBin7Line} from 'react-icons/ri'

const Songs = props => {
  const {songsDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <div className="image-card">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-card">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-card">
        <p>{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <RiDeleteBin7Line className="logo" />
        </button>
      </div>
    </li>
  )
}

export default Songs
