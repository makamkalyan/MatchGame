import './index.css'

const TabItems = props => {
  const {onChangeImg, details} = props
  const {thumbnailUrl, id, category} = details

  const passImgId = () => {
    onChangeImg(id)
  }

  return (
    <li className="li">
      <button type="button" onClick={passImgId}>
        <img
          className="images"
          src={thumbnailUrl}
          alt="thumbnail"
          key={category}
        />
      </button>
    </li>
  )
}
export default TabItems
