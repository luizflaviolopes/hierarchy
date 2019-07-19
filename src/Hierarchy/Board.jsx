import React from "react";

export class Board extends React.Component {
  constructor(props) {
    super(props);    
  }


  render() {
      return(
    <svg style={{position:'absolute', top:0, left:0, zIndex:'-1', overflow:'visible'}} width={'100%'} height={'100%'} >
        {this.props.children}
    </svg>
      )
}
}
