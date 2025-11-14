import React, { useState } from "react";
import turnoff from '../../img/turnoff.png';
import turnon from '../../img/turnon.png';

function Trade() {
  const [selectedHouses, setSelectedHouses] = useState([]);

  const houses = ["A", "B", "C"];

  const toggleHouse = (house) => {
    setSelectedHouses((prev) =>
      prev.includes(house)
        ? prev.filter((h) => h !== house)
        : [...prev, house]
    );
  };

  const handleSell = () => {
    if (selectedHouses.length === 0) {
      alert("판매할 가구를 선택해주세요!");
      return;
    }
    alert(`${selectedHouses.join(", ")} 가구에게 판매했습니다!`);
    setSelectedHouses([]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* 상단: 버튼 + 집 이미지 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <button 
          style={{ width: '120px', height: '120px', borderRadius: '50%', 
            backgroundColor: '#FFC700', border: 'none', fontWeight: 'bold', 
            cursor: 'pointer', fontSize: '18px', color: '#222',
            marginBottom:'100px', marginTop:'100px'}}
          onClick={handleSell}
        >
          SELL!
        </button>
        
        <div style={{ display: 'flex', gap: '20px', }}>
          {houses.map((house) => {
            const isSelected = selectedHouses.includes(house);
            return (
              <img
                key={house}
                src={isSelected ? turnon : turnoff}
                alt={house}
                style={{ width: '100px', height: '80px', cursor: 'pointer' }}
                onClick={() => toggleHouse(house)}
              />
            );
          })}
        </div>
      </div>

      {/* 내 에너지 현황 + 가상현금 잔고 */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
            내 에너지 현황
          </h2>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#FFB300', margin: 0 }}>10,020 W</p>
        </div>

        <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
            가상현금 잔고
          </h2>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#82ca9d', margin: 0 }}>48,020 ₩</p>
        </div>
      </div>

      {/* 거래 내역 섹션 */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '30px', color: '#333' }}>
          거래 내역
        </h2>

        <div style={{ backgroundColor: '#F8F9FA', overflowY: 'auto', height: '200px', padding: '10px', marginBottom: '20px', color: '#333' }}>
          <p>2025-11-11 A가구 100W, <span style={{ color: '#FFB300', fontWeight: 'bold' }}>+14,000원</span></p> 
          <p>2025-11-11 A가구 100W, <span style={{ color: '#FFB300', fontWeight: 'bold' }}>+14,000원</span></p> 
          <p>2025-11-11 A가구 100W, <span style={{ color: '#FFB300', fontWeight: 'bold' }}>+14,000원</span></p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{ width: '200px', padding: '10px 0', backgroundColor: '#FF5C5C', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
            거래내역 모두 지우기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trade;