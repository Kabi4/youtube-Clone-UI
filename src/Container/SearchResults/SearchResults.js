import React, { Component } from 'react';
import './searchResults.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import SearchResultsChannel from '../../Components/SearchResultsChannel/SearchResultsChannel';
import SearchResultsVedio from '../../Components/SearchResultsVedio/SearchResultsVedio';
class SearchResults extends Component {
    render() {
        return (
            <div className="searchResults">
                <div className="searchResults__icons">
                    <TuneOutlinedIcon/>
                    <h2>FILTER</h2>
                </div>
                <SearchResultsChannel image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
        channel="One Direction"
        verified
        subs="659K"
        vedios={382}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <hr/>
                <SearchResultsVedio
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="One Direction"
        title="Let's Build a YouTube Clone"
        thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <SearchResultsVedio
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="One Direction"
        title="Let's Build a YouTube Clone"
        thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <SearchResultsVedio
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="One Direction"
        title="Let's Build a YouTube Clone"
        thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <SearchResultsVedio
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="One Direction"
        title="Let's Build a YouTube Clone"
        thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
      <SearchResultsVedio
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one"
        timestamp="59 seconds ago"
        channel="One Direction"
        title="Let's Build a YouTube Clone"
        thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
      />
            </div>
        )
    }
};

export default SearchResults;
