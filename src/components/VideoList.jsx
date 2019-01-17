import exampleVideoData from '../data/exampleVideoData.js';
//BRITT I fixed the import here; changed results/result to videos/video t0 be clearer; this makes line 10 work.  On line 30 I also changed video(used to be result) to video.snippet.title so it'd have a string to return.  Everything else is what we built yesterday!

//creating a div, setting videos on the VideoSearchResults props that's = exampleVidData
var VideoList = () => (
  <div className="video-list">
    <VideoSearchResults videos = {exampleVideoData}/>
  </div>
);

//accessing this obj that has been assigned on this props - structuring it how we want
class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
       <img src={this.props.video.snippet.thumbnails.default.url}/>
       <div>{this.props.video.snippet.title}</div>
       <div>{this.props.video.snippet.description}</div>
      </div>
    )
  }

};

//creating a videolistitem component for every single video via map --> setting a video on the videolistitem prop
//spitting out multiple videolistitem components - one for each vid
var VideoSearchResults = (props) => (
  <div class = 'video'>
    <div>
      {props.videos.map(video =>
        <VideoListItem video={video} />
      )}
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;