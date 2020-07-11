import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import News from '../News/News';
import Body from '../../index';
import Podcast from '../Podcast/Podcast';
import About from '../About/About';


const podClick=()=>{
    return(
        ReactDOM.render(
            <Podcast/>,
            document.getElementById('root')
        )
    )
}

const bodyClick=()=>{
    return(
        ReactDOM.render(
            <Body/>,
            document.getElementById('root')
        )
    )
}

const newsClick=()=>{
    return(
        ReactDOM.render(
            <News/>,
            document.getElementById('root')
        )
    )
}
const aboutClick=()=>{
    return(
        ReactDOM.render(
            <About/>,
            document.getElementById('root')
        )
    )
}


class Footer extends Component{
    render(){
        return(
            <footer>

                <nav id="mobile-nav">
                    <a onClick = {podClick} className="foot-nav-item"><i className="fas fa-microphone-alt"></i><br/><span>PODCAST</span></a>
                    <a onClick = {bodyClick} className="foot-nav-item"><i className="fa fa-home"></i><br/><span>HOME</span></a>
                    <a onClick = {newsClick} className="foot-nav-item"><i className="fas fa-newspaper"></i><br/><span>NEWS</span></a>
                    <a onClick = {aboutClick} className="foot-nav-item"><i className="fa fa-question"></i><br/><span>ABOUT US</span></a>
                </nav>
            </footer>
        );
    }
}

export default Footer;