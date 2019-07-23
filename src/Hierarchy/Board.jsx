import React from "react";

export class Board extends React.Component {
  constructor(props) {
    super(props);    
  }


  render() {
      return(
        <div style={{position:"static", fontSize:0}}>
        <div>
    <div style={{position:'absolute', top:0, left:0, zIndex:'-1', overflow:'visible', fontSize:"initial"}} width={'100%'} height={'100%'} >
        {this.props.children}
    </div>
    </div>
    </div>
      )
}
}
