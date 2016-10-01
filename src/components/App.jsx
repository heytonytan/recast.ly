class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {},
      listOfVideos: []
    };
  }
  loadData(data) {
    console.log('loading data yay!', data); 
    this.setState({ 
      currentVideo: data[0], 
      listOfVideos: data
    });
    console.log(this.state);
    this.render();
  }
  componentWillMount() {
    console.log('componentWillMount!');
    this.props.searchYouTube({}, this.loadData.bind(this));
  }
  updateVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (<div>
      <Nav />
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

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));