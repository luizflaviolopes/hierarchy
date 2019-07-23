import React from "react";
import { Board } from "./Board";
import { Unity } from "./Unity";
import { Connector } from "./Connector";

export class HierarchyDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dados:[], connectors:[]}

    //verificar se props.data é um array
    }

  componentDidMount(){
    this.arrangeData(this.props.data);
  }

  arrangeData = dados => {
    let connects = [];
    for(let i = 0; i< dados.length; i++){
        let childs = dados.filter(e => {return e.pai == dados[i].id})
        dados[i].childrens = childs
        childs.forEach(c => {
          connects.push({start:dados[i], end:c});
        });
    }
    let orphan = dados.filter(a=>{return !a.pai});
    this.setState({dados: [...orphan], connectors: connects});

  }


  render() {
    const {el, lineColor} = this.props;

      return (
    <Board>
        {this.state.dados.map(a=><Unity un={a} el={el}></Unity>)}
        <svg style={{position:'absolute', top:0, left:0, zIndex:'-1', overflow:'visible'}} width={'100%'} height={'100%'} >
          <g>
          {this.state.connectors.map(c=><Connector start={c.start} end={c.end} color={lineColor}></Connector>)}
          </g>
        </svg>
    </Board>
      )
}
}

export default HierarchyDraw;