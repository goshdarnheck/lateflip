import React from "react"
import PropTypes from "prop-types"

const CardVideo = ({ url, title, thumbnail, length, youtubeId, extras }) => {
  if (youtubeId) {
    url = `https://www.youtube.com/watch?v=${youtubeId}`
    thumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  }

  return (
    <div className="card card-video">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <div className="image">
        <a href={url}>
          <img alt="" src={thumbnail} />
        </a>
      </div>
      <div className="details">Video - {length}</div>
      {extras && (
        <ul className="extras">
          {extras.map((extra, i) => (
            <li key={i}>{extra}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

CardVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
  length: PropTypes.string,
  youtubeId: PropTypes.string,
  extras: PropTypes.array,
}

export default CardVideo
