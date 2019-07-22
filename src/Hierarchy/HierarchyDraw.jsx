import React from "react";
import { Board } from "./Board";
import { Unity } from "./Unity";

export class HierarchyDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dados:[]}

    //verificar se props.data é um array
    }

  componentDidMount(){
    this.arrangeData(this.props.data);
  }

  arrangeData = dados => {
    for(let i = 0; i< dados.length; i++){
        dados[i].childrens = dados.filter(e => {return e.pai == dados[i].id})
    }
    let orphan = dados.filter(a=>{return !a.pai});
    this.setState({dados: [...orphan]});

  }


  render() {
    const {el} = this.props;

      return (
    <Board>
        {this.state.dados.map(a=><Unity un={a} el={el}></Unity>)}

    </Board>
      )
}
}

export default HierarchyDraw;