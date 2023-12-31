import React from "react";
import LoupeIcon from "/loupe.svg";
import Styles from "./Search.module.css";

class Search extends React.Component {
    render() {
      return (
        <>
            <input type="text" className={`${Styles.search} ${this.props.styles}`} size={this.props.width} placeholder="Поиск..." name="" id="" />
            <img className="relative -top-10 left-5" src={LoupeIcon} alt="" />
        </>
      );
    }
  }
  
  export default Search;