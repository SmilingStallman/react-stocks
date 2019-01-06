import React, {Component} from 'react';
import Box from './Box';

class AppGroup extends Component {

  getImageGroup(){
    let images = [];
     //note using 10 is bad form and too static, but only way without changing array in App
     //to be a JSON file both Components can access, etc
    for(let i = 0; i < 10; i++){
      images[i] = <Box index={i}/>
    }
    return images;
  }

  render() {
    return (
      <div id="container" style={{display: "flex", flexWrap: "wrap"}}>
         {this.getImageGroup().map(oneImage => <div style={{margin: "auto"}}>{oneImage}</div>)}
      </div>
    );
  }
}

export default AppGroup;
