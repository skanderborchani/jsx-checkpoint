import imageJsx from './MyImage.png' ;
import './App.css';

function App() {
  return (
  
      <div style={{border:'1px black',maxWidth:'100vw'}}>
      <h1 className='title red'>Your name here</h1>
      <img src={ imageJsx} alt ='MyImage' />
      <br/>
      <img src='imagepublic.webp' alt='imagepublic'/>
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
    
  );
}

export default App;
