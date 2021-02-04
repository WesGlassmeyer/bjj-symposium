import React, { Component } from "react";
import FavItem from "../FavItem/FavItem";
import FavItemList from "../FavItemList/FavItemList";

export default class FavPage extends Component {
  render() {
    return (
      <div>
        <h3>Community Favorites Page</h3>
        <FavItem />
        <FavItemList />
      </div>
    );
  }
}
