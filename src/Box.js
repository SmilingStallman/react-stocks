import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {urlList: ['/images/stocks/1.jpg',
                        '/images/stocks/2.png',
                        '/images/stocks/3.jpg',
                        '/images/stocks/4.jpg',
                        '/images/stocks/5.png',
                        '/images/stocks/6.jpg',
                        '/images/stocks/7.jpg',
                        '/images/stocks/8.png',
                        '/images/stocks/9.jpg',
                        '/images/stocks/10.png'
                        ],
                   currentIndex: this.props.index,
                   alt: "wojack"
                  };
    this.switchImage();   //starts time when class created
  }

  //incriments this.CurrentIndex by +1 until going to breach array range, then resets to 0
  nextImage(){
    if(this.state.currentIndex >= this.state.urlList.length-1)
      this.setState({currentIndex: 0});
    else
      this.setState({currentIndex: this.state.currentIndex+1});
  }

  //updates image every second
  switchImage(){
        setInterval(()=> this.nextImage(), 3000);
  }

  //create image and set default photo to play
  getImage(index){
      let pic = <img src={this.state.urlList[this.state.currentIndex]} alt="wojack" style={{width:"100%", height: "100%", margin: "30px"}}></img>;

      //different image sizes for larger and smaller viewports
      if(document.documentElement.clientWidth > 900){
        pic.props.style.width="20vw";
        pic.props.style.height="20vw";
      }
      else{
        pic.props.style.width="90vw";
        pic.props.style.height="90vw";
      }

      return pic;
  }

  render() {
    return this.getImage();
  }
}


export default App;
