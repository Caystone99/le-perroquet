import React, {Component} from 'react';
import Footer from '../Navigation/Footer';
import Header from '../Navigation/Header';



const Banner=(props)=>{
    return(
        <div className='banner'>
            <h4 className='bannerTitle'>{props.title}</h4>
        </div>
    )
}

class About extends Component {
    render(){
        return(
            <div id='about'>
                <Header/>
                <Banner
                    title='WHO WE ARE'
                />
                <Footer/>
            </div>
        );
    }
}

export default About;