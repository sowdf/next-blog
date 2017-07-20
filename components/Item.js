import React from 'react';
import Bar from './Bar';

class Item extends React.Component{
    render(){
        let {content} = this.props;
        return (
            <li>
                {content}
                <Bar/>
            </li>
        )
    }
}
export default Item;