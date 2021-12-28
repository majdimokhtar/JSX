import logo from './logo.svg';
import './App.css';
import image from'./imageInSrc.jpg';
import './style.css';
function App() {
  return (
    <div className="App">
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">My project jsx</h1>
          <div className='container'><img src={image} className='images'/>
          <img src="/imageInPublic.jpg" className='images' />
          </div>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
