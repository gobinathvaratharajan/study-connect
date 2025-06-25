import EventDashboard from '../features/events/dashboard/eventDashboard';
import Navbar from './layout/nav/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <EventDashboard />
      </div>
    </>
  );
}

export default App;
