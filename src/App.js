
import './App.css';
import Video from './component/Video';
import Playbutton from './playButton';
function App() {
  let videos = [{
    id: 1,
    title: "MongoDB Tutorial",
    views: "1M ",
    time: "2 year ago",
    channel: "Coder Dost",
    verified: true

  }, {
    id: 2,
    title: "ReactJs Tutorial",
    views: "900K ",
    time: "1 year ago",
    channel: "Coder Dost",
    verified: false
  }, {
    id: 3,
    title: "NextJs Tutorial",
    views: "3M ",
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true
  }];
  return (
    <>
      <div className='App'>
        <div>Videos</div>

        {
          videos.map(video => <Video title={video.title} views={video.views} time={video.time} channel={video.channel} verified={video.verified} >

            <Playbutton message="play-msg" onPlay={() => console.log('Playing...', video.title)} onPause={() => console.log('Paused...', video.title)}>{video.title}</Playbutton>
          </Video>
          )
        }
        <div style={{ clear: 'both' }}>

        </div>

      </div>


    </>

  );
}


export default App;
