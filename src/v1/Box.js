import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {urlList: ['images/stocks/1.jpg',
                        'images/stocks/2.png',
                        'images/stocks/3.jpg',
                        'images/stocks/4.jpg',
                        'images/stocks/5.png',
                        'images/stocks/6.jpg',
                        'images/stocks/7.jpg',
                        'images/stocks/8.png',
                        'images/stocks/9.jpg',
                        'images/stocks/10.png'
                        ],
                   currentIndex: this.props.index,
                   alt: "wojack"
                  };
    this.switchImage();   //starts time when class created
  }

  //incriments this.CurrentIndex by +1 until going to breach array range, then resets to 0
  nextImage(){
    this.state.currentIndex >= this.state.urlList.length-1 ? (this.setState({currentIndex: 0})) : this.setState({currentIndex: this.state.currentIndex+1});
  }

  //updates image every second
  switchImage(){
        setInterval(()=> this.nextImage(), 3000);
  }

  //returns image with different size based on viewport size
  render() {
    return document.documentElement.clientWidth > 900 ? (
        <img src={this.state.urlList[this.state.currentIndex]} alt="wojack" style={{margin: "30px", width:"20vw", height: "20vw"}}></img>
        ) : (
        <img src={this.state.urlList[this.state.currentIndex]} alt="wojack" style={{margin: "30px", width:"90vw", height: "90vw"}}></img>
        );
  }
}

export default App;
