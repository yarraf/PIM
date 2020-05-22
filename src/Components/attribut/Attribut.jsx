import React, { Component } from 'react'
import AttribueFreeText from './AttributeFreeText';



class Attribut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Content-card shadow p-3 mb-5">
                {this.props.listAttr.ATTRIBUTES.map((attr) => {
                    return (
                        <div>
                            {attr.ATTRCALCULATED.map((index) => {
                                return (
                                    <div className="Content-card shadow p-3 mb-5">
                                        <div>{index.ASSET}</div>
                                        <div>{index.ATTRIBUTENAME}</div>
                                        <div>{index.SEQUENCE}</div>
                              
                                    </div>

                                )
                            })
                            }

                            {attr.ATTRFREETEXT.map((i, index) => {
                                return (
                                    <AttribueFreeText attr={i}/>

                                )
                            })
                            }

                            {attr.ATTRPREDEFINIT.map((i, index) => {
                                return (
                                    <div className="Content-card shadow p-3 mb-5">
                                        <div>{i.ASSET}</div>
                                        <div>{i.ATTRIBUTENAME}</div>
                                        <div>{i.SEQUENCE}</div>
                                    </div>

                                )
                            })
                            }
                        </div>
                    )
                })}
            </div>
        )

    }
}
export default Attribut; 