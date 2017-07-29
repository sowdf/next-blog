import React from 'react';
import Link from 'next/link';

export default class Article extends React.Component{
    render(){
        let {_id,title,showTime,description} = this.props;
        return(
            <article>
                <h2><a href={`/article/${_id}`}>{title}</a></h2>
                <p className="info">时间: {showTime}| <a>评论</a></p>
                <div className="view" dangerouslySetInnerHTML={{__html:description}}>
                </div>
                <div className="read_more">
                    <a href={`/article/${_id}`}>>> 阅读剩余部分 </a>
                </div>
            </article>
        )
    }
}