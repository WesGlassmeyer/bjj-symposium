import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App_header">
      <h1>
        <Link to="/">BJJ Symposium</Link>
      </h1>
    </header>
  );
}
