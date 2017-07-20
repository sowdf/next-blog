import React from 'react';

export default class Article extends React.Component{
    render(){
        let {title,showTime,description} = this.props;
        return(
            <article>
                <h2><a href="">{title}</a></h2>
                <p className="info">时间: {showTime}| <a>评论</a></p>
                <div className="view">
                    {description}
                </div>
                <div className="read_more">
                    <a href=""> >> 阅读剩余部分  </a>
                </div>
            </article>
        )
    }
}