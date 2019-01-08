import React from 'react';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localStorageItem: 'what'
    };
  }
  componentDidMount() {
    console.log(`COmponent did mount: ${localStorage.getItem('x')}`);
    this.setState({
      localStorageItem: localStorage.getItem('x')
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>&gt;&gt;{this.state.localStorageItem}&lt;&lt;</h1>
        <a href="/page2">Go to page2</a>
      </div>
    );
  }
}

export default IndexPage;
