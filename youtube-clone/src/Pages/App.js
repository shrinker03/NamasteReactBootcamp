import { Outlet } from 'react-router-dom';
import '../../src/App.css';
import AppBar from '../components/AppBar';
import Header from '../components/Header';

function App() {
  return (
    <div className='h-full w-full '>
      <Header />
      <div className='flex'>
        <AppBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
