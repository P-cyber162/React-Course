import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Developer');
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="John" role="Manager" />
          <Employee name="Jane" role={role} />
          <Employee name="Bob" />
        </>
      ) : (
        <h1>Employee Not Here!</h1>
      )}
    </div>
  );
}

export default App;
