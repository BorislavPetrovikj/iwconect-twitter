
import './App.css';
import { Home } from './containers/Home/Home';



function App() {
  return (
    <div className='container fluid' style={{ background: "red", height: "100vh" }} >
      <div className='row'>
        <div className='container' style={{ background: "cyan", height: "100vh" }}>
          {/* whole application goes here */}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
