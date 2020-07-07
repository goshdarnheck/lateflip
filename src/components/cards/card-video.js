import React from "react"
import PropTypes from "prop-types"

const CardVideo = ({ url, title, thumbnail, details, youtubeId, extras }) => {
  if (youtubeId) {
    url = `https://www.youtube.com/watch?v=${youtubeId}`
    thumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  }

  return (
    <div className="card card-video">
      <a href={url}>
        <h2>{title}</h2>
        <div className="image">
          <img alt="" src={thumbnail} />
        </div>
      </a>
      {details && <div className="details"></div>}
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
