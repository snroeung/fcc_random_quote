import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import quotes from './quotesDB.js';
import QuoteBox from './QuoteBox.jsx'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      bg_color: '#FFDAC1'
    };

    this.randomQuote = this.randomQuote.bind(this);
    this.bgColor = this.bgColor.bind(this);
  } 

  randomQuote() {
    this.bgColor();
    let index = Math.floor(Math.random() * 6);
    let newQuote = quotes[index];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    })
  }

  bgColor() {
    let colors = [
      '#E0FEFE',
      '#C7CEEA',
      '#FFDAC1',
      '#FF9AA2',
      '#FFFFD8',
      '#B5EAD7'
    ];
    
    let index = Math.floor(Math.random() * 6);
    
    this.setState({
      bg_color: colors[index]
    })
  }

  render() {
    return (
      <div style = {{height:'100%', 
                      width: '100%', 
                      backgroundColor: this.state.bg_color, 
                      transition:'1s'}}>
        <QuoteBox 
          quote = {this.state.quote}
          author = {this.state.author}
          genQuote = {this.randomQuote}
          bg_color = {this.state.bg_color}
        />
      </div>
    );
  }
}

export default App;
