import React, { Component } from "react";
import FavItemList from "../FavItemList/FavItemList";

export default class FavPage extends Component {
  render() {
    return (
      <div>
        <h2>Community Favorites Page</h2>

        <FavItemList />
      </div>
    );
  }
}
