import React from "react";

class JobTitle extends React.Component {
  render() {
    return <div className="rounded-full bg-white">
        <p className={`${this.props.color} px-1`}>★   {this.props.text}</p>
    </div>;
  }
}

export default JobTitle;