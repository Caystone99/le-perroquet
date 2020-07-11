import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome/css/all.css';
import Header from './Pages/Navigation/Header';
import Footer from './Pages/Navigation/Footer';
import NewsCard from './Pages/News/NewsCard';

class Body extends Component{
    render(){
        return(
            <>
                <Header/>
                
                <Banner
                    title='Top Contents'
                />
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
            </>
        );
    }
}

const Banner=(props)=>{
    return(
        <div className='banner'>
            <h4 className='bannerTitle'>{props.title}</h4>
        </div>
    )
}



ReactDOM.render(
    <Body/>,
    document.getElementById('root')
)
export default Body;