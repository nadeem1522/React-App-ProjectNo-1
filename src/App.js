import './App.css';
import Accordions from './components/Accordions';



function App() {


  return (
    <>
      <div className="container mb-5">
        <div className='main-contain mt-5 mb-5'>
          <h1 className='headline3 mb-3'>
            List view
          </h1>
            <Accordions/>
        </div>
        <div className=" headline3 footer text-center">
             Nadeem Mansoori 🧑‍💻
        </div>
      </div>
    </>
  );
}

export default App;
