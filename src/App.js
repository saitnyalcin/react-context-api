import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './userContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Steve">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
