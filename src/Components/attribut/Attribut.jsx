import React, { Component } from 'react'
import AttribueFreeText from './AttributeFreeText';
import AttrCalculated from './AttrCalculated';
import AttrPredefinit from './AttrPredefinit';
import '../attribut/attribute.scss'



class Attribut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-muted text-size-details">
                {this.props.listAttr.ATTRIBUTES.map((attr,index) => {
                    return ( <div key={index}>
                            {attr.ATTRCALCULATED.map((i,index) => {
                                return (
                                    <AttrCalculated key={index} attr={i}/>

                                )
                            })
                            }
                       

                            {attr.ATTRFREETEXT.map((i, index) => {
                                return (
                                    <AttribueFreeText key={index} attr={i}/>

                                )
                            })
                            }

                            {attr.ATTRPREDEFINIT.map((i, index) => {
                                return (
                                 <AttrPredefinit key={index} attr={i}/>

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