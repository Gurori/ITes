import React from "react";
import InformationItem from "./InformationItem";
import Text from "./InformationText";

class InformationBlocks extends React.Component {
  render() {
    return (
      <div>
        <Text text={this.props.text} /> <br />
        <div className={this.props.styles}>
          {Array(this.props.number)
            .fill(0)
            .map(() => (
              <InformationItem color={this.props.color} link={this.props.link} />
            ))}
        </div>
      </div>
    );
  }
}

InformationBlocks.defaultProps = {
  styles: "grid grid-cols-5 mt-5 mb-10",
};
export default InformationBlocks;
