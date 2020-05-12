import React from 'react';



class Tag extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
          return <div className="Content-card shadow p-3 mb-5">
              <span>{this.props.Name}</span>
          </div>
    }
}



export default Tag;