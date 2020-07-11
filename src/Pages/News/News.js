import React, {useState, Component} from 'react';
import NewsCard from './NewsCard';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';


class News extends Component{
    
    render(){
        return(
            <div id='news'>
                <Header/>
                <Feature/>
                <NewsCard
                    image = './img/cd-3.jpg'
                    newsHeadline = "Buhari says 'NO' to France influence on eco"
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'BBC Africa'
                    date = '00:36 9th July, 2020'
                />

                <NewsCard
                    image = './img/cd-2.jpg'
                    newsHeadline = 'Nigerian border remains closed'
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'BBC Africa'
                    date = '00:36 9th July, 2020'
                />

                <NewsCard
                    image = './img/cd-1.jpg'
                    newsHeadline = 'Lisa Simpson gets a myPod'
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'BBC Africa'
                    date = '00:36 9th July, 2020'
                />

                
                <Footer/>
            </div>
        );
    }
}

const Feature=()=>{
    return(
        <div id='feature'>
            <h3>Breaking News - Follow the top stories.</h3>
        </div>
    )
}

export default News;