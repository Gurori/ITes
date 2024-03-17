import React from "react";
import LoupeIcon from "/loupe.svg";
import Styles from "./Search.module.css";
import { Search } from "lucide-react";

class SearchInput extends React.Component {
    render() {
      return (
        <div className={`${this.props.className} h-14`}>
            <input type="search" className={`${Styles.search} ${this.props.styles}`} size={this.props.width} placeholder="Поиск..." name="" id="" />
            <Search className="relative -top-10 left-5 text-dark-gray" strokeWidth={1.3} />
        </div>
      );
    }
  }
  
  export default SearchInput;