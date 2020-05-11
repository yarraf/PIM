import React from 'react';
import './tag.scss';

export default class Tag extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="content-card shadow p-3 mb-5">
                    <span>{this.props.Name}</span>
                </div>
    }
}