import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Puts from './components/Puts';
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-b from-cyan-500 to-blue-900 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Puts />
    </div>
  );
}

export default App;
