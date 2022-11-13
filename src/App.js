import './App.css';
import Accordions from './components/Accordions';



function App() {
  return (
    <>
      <div className="container mb-5">
        <div className='main-contain mt-5 mb-5'>
          <h1 className='headline4'>
            List view
          </h1>
            <Accordions/>
        </div>
        <div className="footer float-end">
            @ Nadeem Mansoori Footer
        </div>
      </div>
    </>
  );
}

export default App;
