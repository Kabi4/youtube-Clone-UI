import React from 'react'
import './VideoCard.css'
import Avatar from "@material-ui/core/Avatar/Avatar";
const VideoCard = ({thumbnail,channelName,title,channelImage,timeStamp,views}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="videoCard__details">
                <Avatar className="videoCard__details__avatar" src={channelImage} />
                <div className="videoCard__details__text">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>{views} · {timeStamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
