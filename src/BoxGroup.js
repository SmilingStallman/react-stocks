import React from 'react';
import Box from './Box';

const BoxGroup = (urlList) => {
  return (<div id="container" style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
            {urlList.map(url => Box(url))}
          </div>
         );
};

export default BoxGroup;
