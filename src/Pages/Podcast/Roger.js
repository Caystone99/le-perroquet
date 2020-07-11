import React, {Component} from 'react';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import ChannelBanner from './ChannelBanner';

class Roger extends Component{
    render(){
        return(
            <div id='roger'>
                <Header/>
                <ChannelBanner
                    channelImage = '../img/cd-1.jpg'
                    channelTitle = 'Life in Benin'
                    channelDesc = 'This channel provides new and exciting contents'
                />
                <Footer/>
            </div>
        );
    }
}

export default Roger;