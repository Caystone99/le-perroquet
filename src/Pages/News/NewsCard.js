import React, {Component} from 'react';



class NewsCard extends Component{

    render(){
        return(
            <div id='cards'>
                <span>
                    <img  className='card-image' src={this.props.image} alt='card image'/>
                </span>
                <div className='cardContent'>
                    <span className='card-content'>
                        <h3 className='news-title'>{this.props.newsHeadline}</h3>
                        <p className='news-body'>{this.props.newsBody}    
                            <span id='news-body-more'>{this.props.newsBodyMore}</span>
                        </p>
                    </span>

                    <div className='cardButtons'>
                        
                        <a className='card-source'>{this.props.source}</a> 
                        <a className='card-date'>{this.props.date}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard;