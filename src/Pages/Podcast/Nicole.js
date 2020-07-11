import React, {Component} from 'react';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import ChannelBanner from './ChannelBanner';
import ChannelEpisodes from './ChannelEpisodes';


class Nicole extends Component{
    render(){
        return(
            <div id='nicole'>
                <Header/>
                <ChannelBanner
                    channelImage = '../img/cd-3.jpg'
                    channelTitle = 'Teemar'
                    channelDesc = 'This channel provides new and exciting contents'
                />
                <ChannelEpisodes

                />
                <Footer/>
            </div>
        );
    }
}

export default Nicole;