import MoreForm from './components/MoreForm';
import './flatly.css'


  function App() {
    return (
        <div className="container mt-3">
          <div className="card shadow">
            <div className="card-body">
              {/* <h1>Simplex</h1> */}
              <MoreForm />
            </div>
          </div>
        </div>

    );
  }

export default App;