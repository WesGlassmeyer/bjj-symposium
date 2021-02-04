import React, { Component } from "react";
import FavItem from "../FavItem/FavItem";
import dummydata from "../dummydata";

class FavItemList extends Component {
  render() {
    const favItems = dummydata.items;

    return (
      <section className="FavItemList">
        <ul className="FavItemList__list" aria-live="polite">
          {favItems.map((favItem) => (
            <FavItem key={favItem.id.videoId} favItem={favItem} />
          ))}
        </ul>
      </section>
    );
  }
}

export default FavItemList;
