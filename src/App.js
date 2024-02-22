import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Puts from './components/Puts';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500  to-blue-900 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Puts />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}

export default App;
