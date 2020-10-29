import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      wordLimit: props.maxChars
    };
  }

  changeState = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        value= {this.state.value} 
        onChange = {(e) => {this.changeState(e)}}
        name="message" 
        id="message"
         />
         <h2>word limit: {this.state.wordLimit - this.state.value.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
