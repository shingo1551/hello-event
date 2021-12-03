import React from 'react';

class Hello extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  onClick = (e) => {
    console.log(e);
    this.props.onHello({ message: 'Hello React!' });
  }

  render() {
    return (
    <div>
      <p >Hello React!</p>
      <button  onClick={this.onClick}>HELLO</button>
    </div>
    )
  }
}

export default Hello
