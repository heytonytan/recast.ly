class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      listOfVideos: exampleVideoData
    };
  }
  loadData(data) {
    console.log('successfully loaded data', data[0]);
    this.setState({ 
      currentVideo: data[0], 
      listOfVideos: data
    });
    this.render();
  }
  search(query) {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      max: 5,
      query: query
    }, this.loadData.bind(this));
  }
  componentWillMount() {
    this.search('hack reactor');
  }
  updateVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  handleInput(query) {
    console.log('searching for', query);
    this.search(query);
  }
  render() {
    return (<div>
      <Nav handleInput={this.handleInput.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.listOfVideos} updateVideo={this.updateVideo.bind(this)} />
      </div>
    </div>);
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;