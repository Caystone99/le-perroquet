import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome/css/all.css';
import Header from './Pages/Navigation/Header';
import Footer from './Pages/Navigation/Footer';
import NewsCard from './Pages/News/NewsCard';
import Push from 'push.js';
import Banner from './Pages/Banner/Banner';


Push.create('Headlines', {
    body: 'The president of Nigeria has rejected the influence of France on the new West African Currency',
    icon: './assets/slide2.jpg',
    timeout:5000,
    onClick: function(){
        window.focus();
        this.close();
    },
    vibrate: [300, 200]
});

Push.create('Headlines', {
    body: 'Nigerian Border Remains closed',
    icon: './assets/slide3.jpg',
    timeout:5000,
    onClick: function(){
        window.focus();
        this.close();
    }
});


class Body extends Component{
    render(){
        return(
            <>
                <Header/>
                <Banner
                    bannerImage = './assets/slide1.jpg'
                    captionHeader = 'War on DeathStar leaves many wondering on the fate of the Galaxy'

                />
                <NewsCard
                    image = './img/cd-3.jpg'
                    newsHeadline = "'NO to France influence on eco'"
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'BBC Africa'
                    date = '00:36 9th July, 2020'
                />

                <NewsCard
                    image = './img/cd-1.jpg'
                    newsHeadline = 'Nigerian border remains closed'
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'CNN Africa'
                    date = '00:36 9th July, 2020'
                />

                <NewsCard
                    image = './img/cd-1.jpg'
                    newsHeadline = 'Lisa Simpson gets a myPod'
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'VOX Africa'
                    date = '00:36 9th July, 2020'
                />
                <NewsCard
                    image = './img/cd-1.jpg'
                    newsHeadline = 'Loro Title'
                    newsBody= "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
                    newsBodyMore='More dummy code that does nothing, just fills up space'
                    source = 'BJ Africa'
                    date = '00:36 9th July, 2020'
                />
                <Footer/>
            </>
        );
    }
}




ReactDOM.render(
    <Body/>,
    document.getElementById('root')
)
export default Body;