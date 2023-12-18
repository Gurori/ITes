import React from "react";

class TextOnMain extends React.Component {
  render() {
    return (
      <div className="py-40">
        <p className="text-purple">
          <b>{this.props.purpletext}</b>
        </p>
        <h3 className="my-5">{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TextOnMain;
