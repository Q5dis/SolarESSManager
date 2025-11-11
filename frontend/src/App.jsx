import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div>
      <div style={{ backgroundColor: '#FFD900', padding: '10px'}}>
        <button 
          onClick={() => setPage('home')} 
          style={{ ...buttonStyle, fontWeight: page === 'home' ? 'bold' : 'normal' }}>
          HOME
        </button>
        <button 
          onClick={() => setPage('arduino')} 
          style={{ ...buttonStyle, fontWeight: page === 'arduino' ? 'bold' : 'normal' }}>
          ARDUINO
        </button>
        <button 
          onClick={() => setPage('sem')} 
          style={{ ...buttonStyle, fontWeight: page === 'sem' ? 'bold' : 'normal' }}>
          S.E.M
        </button>
        <button 
          onClick={() => setPage('team')} 
          style={{ ...buttonStyle, fontWeight: page === 'team' ? 'bold' : 'normal' }}>
          TEAM
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        {page === 'home' && (
          <div>
            <h1>Solar ESS Manager<br/>S.E.M</h1>
            <img src="img/yellow.png" width="200" height="200" alt="yellow"/>
            <img src="img/gray.png" width="200" height="200" alt="gray"/>
          </div>
        )}
        
        {page === 'arduino' && (
        <div>
            <h1>Arduino<br></br>Structure</h1>
        </div>
        )}
        
        {page === 'sem' && (
        <div>
            <h1>S.E.M<br/>Control System</h1>
            <button>버튼</button>
        </div>
        )}
        
        {page === 'team' && (
         <div>
            <h1>TEAM</h1>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;