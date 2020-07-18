import React, {Component} from 'react';

class Banner extends Component{
    render(){
        return(
            <div id='banner'>
                <span className='bannerImage'>
                    
                </span>
                <h2 className='bannerHeader'> {this.props.captionHeader} </h2>
                    <h4 className='bannerDetails'> {this.props.captionDetails} </h4>

            </div>
        )
    }
}

export default Banner;