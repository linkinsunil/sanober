import './App.css';
import BackgroundOne from './components/BackgroundOne';
import Login from './components/Login';

function App() {
  return (
    <div className='h-screen w-screen'>
      <BackgroundOne>
        <Login />
      </BackgroundOne>
    </div>
  );
}

export default App;
