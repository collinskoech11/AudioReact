
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <ReactAudioPlayer
       src="my_audio_file.ogg"
       autoPlay
       controls
     />
    </div>
  );
}

export default App;
