import React from "react";

export class Unity extends React.Component {
  constructor(props) {
    super(props);    
  }


  render() {
    const {el, un} = this.props;
    const El = el;
    let children;
    if(this.props.un.childrens)
    {
      children = this.props.un.childrens;
    }

      return(
        
        <div>
          <div style={{display: 'flex', justifyContent:'center', marginTop:'2rem'}}>
            <div
            style={{overflow:'hidden', margin:'5px'}}
            >
          <div style={{display:'inline-block', alignItems:'center', justifyContent:'center', position:'relative', minWidth:'1rem', minHeight:'1rem'}}>
            <El text={un.sigla} id={un.id}></El>
          </div>
          </div>
        </div>



        
          <div style={{display:'flex', flexDirection:'row'}}>
            {children.map(a => <Unity un={a} el={el}/>)}
          </div>

        </div>

      )
}
}
