import React, {Component} from 'react';

/*
var PushManager: {
    new (): PushManager;
    prototype: PushManager;
    readonly supportedContentEncodings: readonly string[];
}
*/


const ChannelBanner =(props)=>{
    return(
        <div id='channelBanner'>
            <span>
                <img className='channelImage' alt='channel image' src={props.channelImage}/>
            </span>
            <span className='channelDesc'>
                <h3>{props.channelTitle}</h3>

                <p>{props.channelDesc}</p>
            </span>
        </div>
    )
}

export default ChannelBanner;