import React, {Component} from 'react';
import BoxGroup from './BoxGroup';

class IntervalBoxGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlList: ['images/stocks/1.jpg',
        'images/stocks/2.png',
        'images/stocks/3.jpg',
        'images/stocks/4.jpg',
        'images/stocks/5.png',
        'images/stocks/6.jpg',
        'images/stocks/7.jpg',
        'images/stocks/8.png'
      ]
    };
  }

  componentDidMount() {
    this.switchImage();
  }

  componentWillUnmount(){
    this.switchImage();
  }

  //creates temp urlList based on current state, moves rear index to front, then sets new state with temp urlList
  nextImages() {
    let tempUrl = new Array(...this.state.urlList);
    tempUrl.unshift(tempUrl.pop());

    this.setState(lastState => ({
      urlList: tempUrl
    }));
  }

  //Updates images every 3 seconds
  switchImage() {
    setInterval(() => this.nextImages(), 3000);
  }

  //renders BoxGroup, which re-renders with new images each setInterval interation
  render() {
    return BoxGroup(this.state.urlList);
  };
}

export default IntervalBoxGroup;
