import React from 'react';
import Layout from '../components/layout';
import Article from '../components/Article';
import fetch from 'isomorphic-fetch';
const url = require('../data/url');
class Index extends React.Component{
    static async getInitialProps(){
        const res = await fetch(url.getArticleList);
        const resJosn = await res.json();
        const {contents} = resJosn;
        return {articleList : contents}
    }
    render(){
        let {articleList} = this.props;
        console.log(articleList);
        return (
            <Layout title="blog">
                <div className="m_article_list">
                    {
                        articleList.map((item,index)=>{
                            return <Article key={index} {...item}/>
                        })
                    }
                </div>
            </Layout>
        )
    }
};

export default Index;