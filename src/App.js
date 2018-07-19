import React, { Component,Fragment } from 'react';
import './App.css';
import axios from 'axios'
import Quote from './components/Quote'
import randomRgbaColor from './utils/helper'

const api='https://talaikis.com/random_quotes_api/';
class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            quote:{
                quote:'',
                author:''

            },
            isLoaded:false,

            overlayColor: {
                backgroundColor: 'rgba(255, 255, 255, 0.42)'
            }

        }

    }
  componentDidMount() {
       this.getQuote();

    }
    changeOverlayColor = () => {
        this.setState({
            overlayColor: {
                backgroundColor: randomRgbaColor()
            }
        });
    }

  getQuote=()=> {
      this.setState({isLoaded: false});
      axios.get(api)
          .then(result => this.setState({
              quote: result.data,
              isLoaded: true
          }))
          .catch(error => this.setState({
              error,
              isLoaded: false
          }));
this.changeOverlayColor()
  };

    shareQuote=()=> {
      const content = `${this.state.quote.quote} \n -- ${this.state.quote.author}`;
     return content
    };

    render() {
    return (
      <div className="App"  style={this.state.overlayColor} >

          <div className="container" id="quote-box">
            <Quote quote={this.state.quote} />
          <button className="new-quote" id="new-quote"  onClick={this.getQuote} >
             {!this.state.isLoaded?<i className='fa fa-spinner' />:<i className="fa fa-plus"> <text className="fa-plus-text">New Quote</text></i>}
             </button>
<button className="tweet-quote">
              <a  id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.shareQuote() }`} >
                  <i className="fa fa-twitter"> </i>
              </a>
</button>
      </div>
      </div>
    );
  }
}

export default App;
