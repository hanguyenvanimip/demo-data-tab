import React,{Component} from 'react';

class VideoItem extends Component {
    componentDidMount() {
       
        
    }
   

    render() {
        let {video} = this.props;
       
        return (
            <ul>                
                <li>{video.name}</li>
                <li>{video.link}</li>
            </ul>
        )
    }
}

export default VideoItem;


