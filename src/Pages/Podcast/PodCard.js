import React, {Component} from 'react';


class PodCard extends Component{

    render(){
        return(
            <a onClick={this.props.podLink}>
            <div id='cards'>
                <span>
                    <img  className='card-image' src={this.props.image}/>
                </span>
                <div className='cardContent'>
                    <span className='card-content'>
                        <h3 className='pod-title'>{this.props.podTitle}</h3>
                        <p className='pod-body'>{this.props.podMusk}</p>
                    </span>
                </div>
            </div>
            </a>
        );
    }
}



export default PodCard;