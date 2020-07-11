import React, {Component} from 'react';



class NewsCard extends Component{

    render(){
        return(
            <div id='cards'>
                <span>
                    <img alt='NewsImage' className='card-image' src={this.props.image}/>
                </span>
                <div className='cardContent'>
                    <span className='card-content'>
                        <h3 className='news-title'>{this.props.newsHeadline}</h3>
                        <p className='news-body'>{this.props.newsBody}    
                            <span id='news-body-more'>{this.props.newsBodyMore}</span>
                        </p>
                    </span>

                    <div className='cardButtons'>
                        
                        <h5 className='card-source'>{this.props.source}</h5> 
                        <h5 href="#" className='card-date'>{this.props.date}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard;