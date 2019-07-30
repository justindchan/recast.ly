import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: exampleVideoData[0]
    };
    this.click = this.click.bind(this);
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
            <div>search</div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.selected}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList click={this.click} videos={exampleVideoData}/> </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
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






