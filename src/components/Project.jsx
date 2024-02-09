import React from "react";

class Project extends React.Component {
    render() {
        return (
            <div>
              <div className={`h-40 w-56 rounded-3xl ${this.props.styles}`}>
                {this.props.content}
              </div>
              <p className="text-center mt-4 text-white">{this.props.text}</p>
            </div>
          )
    }
}

Project.defaultProps ={ styles : "bg-gray" };
export default Project;
