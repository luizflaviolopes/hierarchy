import React from "react";
import { Board } from "./Board";

export class HierarchyDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state ={data:[]}

    //verificar se props.data é um array
    this.state.data = this.props.data;
    this.arrangeData(this.props.data);
    
  }

  arrangeData = dados => {
    for(let i = 0; i< dados.length; i++){
        dados[i].childrens = dados.filter(e => {return e.pai == dados[i].id})
    }

    this.setState({data: dados.filter(a=>{return !a.pai})})

  }


  render() {
      return (
    <Board>
        

    </Board>
      )
}
}

export default HierarchyDraw;