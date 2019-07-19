import React from "react";

export class Unity extends React.Component {
  constructor(props) {
    super(props);    
  }


  render() {
      return(
        <div>
        <label>unidade</label>
          <div style={{display:'flex', flexDirection:'row'}}>
            {un.childrens.map(a => <Unity/>)}
          </div>

        </div>

      )
}
}
