import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: exampleVideoData[0],
      videos: exampleVideoData,
      search: ''
    };
    this.click = this.click.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.submit = this.submit.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.debouncedSearch = _.debounce(() => this.props.searchYouTube({query: this.state.search, max:5, key: YOUTUBE_API_KEY}, this.setVideos), 800, { 'leading': true })
  }

  setSearch(e) {
    const value = e.target.value;
    this.setState({
      search: value
    })
    this.debouncedSearch();
  }

  componentDidMount() {
    this.props.searchYouTube({query: this.state.search, max:5, key: YOUTUBE_API_KEY}, this.setVideos);
  }

  setVideos(data) {
    this.setState({
      videos: data,
      selected: data[0]
    })
  }

  submit(value) {
    this.props.searchYouTube({query: value, max: 5, key: YOUTUBE_API_KEY}, this.setVideos)
  }

  click(video) {
    this.setState({
      selected: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search  search={this.setSearch} submit={this.submit}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selected}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList click={this.click} videos={this.state.videos}/> </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]}/> </em> </h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em> <VideoList videos={exampleVideoData}/> </em></h5></div>
//         {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
//       </div>
//     </div>
//   </div>
// );






