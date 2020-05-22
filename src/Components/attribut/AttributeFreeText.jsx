import React from 'react';



export default class AttributeFreeText extends React.Component{
constructor(props){
    super(props);
}

    render(){
        const attribute = this.props.attr;
        return (<div className="Content-card shadow p-3 mb-5">
        <div>{attribute && attribute.ASSET}</div>
        <div>{attribute && attribute.ATTRIBUTENAME}</div>
        <div>{attribute && attribute.SEQUENCE}</div>
    </div>);
    }
}