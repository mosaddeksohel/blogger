import './App.css';
import Carusel from './Components/Home/Carusel/Carusel';
import PostBlog from './Components/PostBlog/PostBlog';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">

      <Navigation></Navigation>
      <Carusel></Carusel>
      <PostBlog></PostBlog>

    </div>
  );
}

export default App;
