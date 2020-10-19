import { Avatar } from '@material-ui/core';
import React from 'react';
import './SearchResultsChannel.css';
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
const SearchResultsChannel = ({image,channel,verified,subs,vedios,description}) => {
    return (
        <div className="searchResultsChannel">
            <Avatar src={image} alt="ChannelImage" />
            <div className="searchResultsChannel__description">
                <div className="searchResultsChannel__description__info">
                    <h2>{channel} </h2>
                    <p>{verified && <VerifiedIcon/>}</p>
                </div>
                <div className="searchResultsChannel__description__subsandvedios">
                    <p>{subs} Subscribers</p>
                    <p style={{margin: "0 0.5rem"}}> · </p>
                    <p>{vedios} Videos</p>
                </div>
                <p style={{color: "grey"}}>{description>600?description.slice(0,597)+"...":description}</p>
            </div>
        </div>
    )
};

export default SearchResultsChannel;
