import React, { Component } from "react";
import FavItem from "../FavItem/FavItem";

export default class FavPage extends Component {
  render() {
    return (
      <div>
        <h3>Community Favorites Page</h3>
        <FavItem />
      </div>
    );
  }
}
