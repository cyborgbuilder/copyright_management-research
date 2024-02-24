import React, { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Auth/Register';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // Control view between login and register

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleRegisterSuccess = (userData) => {
    // Optionally, automatically log the user in after registration
    setUser(userData);
  };

  return (
    <div className="App">
      {!user ? (
        <>
          {view === 'login' ? (
            <>
              <Login onLoginSuccess={handleLoginSuccess} />
              <p>Don't have an account? <button onClick={() => setView('register')}>Register here</button></p>
            </>
          ) : (
            <>
              <Register onRegisterSuccess={handleRegisterSuccess} />
              <p>Already have an account? <button onClick={() => setView('login')}>Login here</button></p>
            </>
          )}
        </>
      ) : (
        <div>Welcome, {user.username}</div>
      )}
    </div>
  );
}

export default App;

