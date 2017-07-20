import React from 'react';

class Bar extends React.Component{
    render(){
        let {content} = this.props;
        return (
            <div className="m_bar">
                <button>删除</button>
                <button>推荐</button>
            </div>
        )
    }
}
export default Bar;