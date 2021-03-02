import React, { Component } from "react";
import FavItemList from "../FavItemList/FavItemList";
import "./FavPage.css";

export default class FavPage extends Component {
  render() {
    return (
      <div>
        <h2 className="fav-page-title">Community Favorites Page</h2>

        <FavItemList />
      </div>
    );
  }
}
