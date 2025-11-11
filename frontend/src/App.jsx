import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [arduPage, setArduPage] = useState('circuits');

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
          onClick={() => setPage('statistics')} 
          style={{ ...buttonStyle, fontWeight: page === 'statistics' ? 'bold' : 'normal' }}>
          STATISTICS
        </button>
        <button 
          onClick={() => setPage('trade')} 
          style={{ ...buttonStyle, fontWeight: page === 'trade' ? 'bold' : 'normal' }}>
          S.E.M
        </button>
        <button 
          onClick={() => setPage('arduino')} 
          style={{ ...buttonStyle, fontWeight: page === 'arduino' ? 'bold' : 'normal' }}>
          ARDUINO
        </button>
        <button 
          onClick={() => setPage('virtual')} 
          style={{ ...buttonStyle, fontWeight: page === 'virtual' ? 'bold' : 'normal' }}>
          VIRTUAL-ENVIRONMENT-SETTING
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        {page === 'home' && (
          <div>
            <h1>What is<br></br>Solar ESS Manager?</h1>
            <img src="img/yellow.png" width="200" height="200" alt="yellow"/>
            <img src="img/gray.png" width="200" height="200" alt="gray"/>
            <h1>Introducing<br></br>S.E.M</h1>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>프로젝트 개요</div>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>프로젝트 진행과정 및 디테일</div>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>팀원소개/메일주소</div>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>깃허브레포지토리</div>
          </div>
        )}
        
        {page === 'statistics' && (
        <div>
            <h1>Statistics</h1>
            <div id="holder" style={{backgroundColor:"#FFD900"}}>현재 최적의 판매 조합 추천</div>
            <div id="holder" style={{backgroundColor:"#DCDCDC"}}>가구별 에너지 보유량 차트</div>
            <div id="holder" style={{backgroundColor:"#DCDCDC"}}>시간대별 에너지 축적량 차트(00시마다 초기화/어제와 비교?)</div>
        </div>
        )}
        
        {page === 'trade' && (
        <div>
            <h1>Trade System</h1>
            <div>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>내 에너지 현황</div>
                <div id="holder" style={{backgroundColor:"#DCDCDC", width:"200px",height:"50px"}}>가상현금 잔고</div>
                <div id="holder" style={{backgroundColor:"#FFD900"}}>거래할 수 있는 기능(현재 판매가능 포트 목록)</div>

                <div id="holder" style={{display: 'flex', justifyContent: 'center', alignItems:"center",flexDirection:"column", width:"200px"}}>
                    <button style={{width:"100%"}}>SELL</button>
                </div>

                <div
                    style={{backgroundColor:"#DCDCDC", overflowY: 'auto',
                        overflowX:'hidden',
                        display: 'flex',
                        flexDirection:'column',
                        
                        width:'200px', height:'200px', marginLeft:'10px'
                    }}>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                    <p>2025-11-11 A가구 100W, +14000원</p>
                </div>
                <button style={{ width:'200px', marginLeft:'10px', marginTop:'30px'}}>거래내역 모두 지우기</button>
            </div>
        </div>
        )}
        
        {page === 'arduino' && (
         <div>
            <h1>Arduino<br></br>Structure</h1>
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"#DCDCDC",width:"500px"}}>
                <button className="ardu-button" onClick={() => setArduPage('circuits')}
                    style={{ ...buttonStyle, backgroundColor: arduPage === 'circuits' ? "#FFD900" : "#DCDCDC" }}>CERCUITS</button>
                <button className="ardu-button" onClick={() => setArduPage('video')}
                    style={{ ...buttonStyle, backgroundColor: arduPage === 'video' ? "#FFD900" : "#DCDCDC" }}>VIDEO</button>
                <button className="ardu-button" onClick={() => setArduPage('flowchart')}
                    style={{ ...buttonStyle, backgroundColor: arduPage === 'flowchart' ? "#FFD900" : "#DCDCDC" }}>FLOWCHART</button>
            </div>
            <div id="ardu-show" style={{margin:"0px",backgroundColor:"#DCDCDC",width:"500px", height:"500px"}}>
                {arduPage==='circuits'&&(
                    <div>
                        <h1>CIRCUITS</h1>
                    </div>
                )}

                {arduPage==='video'&&(
                    <div>
                        <h1>VIDEO</h1>
                    </div>
                )}

                {arduPage==='flowchart'&&(
                    <div>
                        <h1>FLOWCHART</h1>
                    </div>
                )}
            </div>
        </div>
        )}

        {page === 'virtual' && (
          <div>
            <h1>Virtual<br></br>Environment<br></br>Setting</h1>

            <p>아두이노와 연결하지 못하는 환경에서 가상으로 값을 설정해 진행할 수 있게 하는 페이지</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;