import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import PodCard from './PodCard'
import Nicole from './Nicole';
import Roger from './Roger'



const NicoleClick=()=>{
    return(
        ReactDOM.render(
            <Nicole/>,
            document.getElementById('root')
        )
    );
}

const RogerClick=()=>{
    return(
        ReactDOM.render(
            <Roger/>,
            document.getElementById('root')
        )
    );
}


class Podcast extends Component{
    render(){
        return(
            <div id='podcast'>
                <Header/>
                <Feature/>
                <PodChannel/>
                <Footer/>
            </div>
        );
    }
}


const PodChannel=()=>{
    return(
        <>
        <PodCard
            podLink = {RogerClick}
            image = './img/cd-1.jpg'
            podTitle = "'Life in Benin'"
            podMusk = "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
        />
        <PodCard
            podLink = {NicoleClick}
            image = './img/cd-3.jpg'
            podTitle = "'Teemar'"
            podMusk = "Loren Ipsum dolor isit, bunch od ummy code to fill up space lol."
        />
        
        </>
    );
}

const Feature=()=>{
    return(
        <div id='feature'>
            <h3>Stream Top Podcast - From our networks</h3>
        </div>
    )
}

export default Podcast;