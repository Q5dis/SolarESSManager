import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DUMMY_ENERGY_DATA = [
  { time: '00:00', A가구: 12, B가구: 8, C가구: 10, D가구: 7 },
  { time: '03:00', A가구: 10, B가구: 6, C가구: 8, D가구: 5 },
  { time: '06:00', A가구: 15, B가구: 10, C가구: 12, D가구: 9 },
  { time: '09:00', A가구: 20, B가구: 15, C가구: 17, D가구: 13 },
  { time: '12:00', A가구: 25, B가구: 18, C가구: 21, D가구: 16 },
  { time: '15:00', A가구: 22, B가구: 16, C가구: 19, D가구: 14 },
  { time: '18:00', A가구: 18, B가구: 12, C가구: 15, D가구: 11 },
  { time: '21:00', A가구: 14, B가구: 9, C가구: 11, D가구: 8 },
];

const DUMMY_HOURLY_DATA = [
  { hour: '00시', 오늘: 5, 어제: 4 },
  { hour: '06시', 오늘: 8, 어제: 7 },
  { hour: '12시', 오늘: 15, 어제: 12 },
  { hour: '18시', 오늘: 12, 어제: 10 },
  { hour: '24시', 오늘: 6, 어제: 5 },
];

function Statistics() {
  const energyData = DUMMY_ENERGY_DATA;
  const hourlyData = DUMMY_HOURLY_DATA;
  const optimal = { A: 10, B: 3, C: 5, D: 2 };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        
      {/* 최적 조합 안내 */}
      <div style={{ marginBottom: '60px', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>
          현재 최적의 판매 조합은...
        </p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          A가구에 {optimal.A}와트, B가구에 {optimal.B}와트, C가구에 {optimal.C}와트, D가구에 {optimal.D}와트
        </p>
      </div>

      <div style={{ marginBottom: '60px', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>
          아두이노 연결 완료!
        </p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          실시간 일사량 정보 10 MJ/㎡
        </p>
      </div>

      {/* 차트 세로로 배치 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* 가구별 에너지 보유량 차트 */}
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '20px'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333'
          }}>
            가구별 에너지 보유량 차트
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: 'Watt', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="A가구" fill="#FFD900" />
              <Bar dataKey="B가구" fill="#82ca9d" />
              <Bar dataKey="C가구" fill="#DCDCDC" />
              <Bar dataKey="D가구" fill="#515151" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 시간대별 에너지 축적량 차트 */}
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '20px'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333'
          }}>
            시간대별 에너지 축적량 차트 (오늘 vs 어제)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis label={{ value: 'Watt', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="오늘" 
                stroke="#FFD900" 
                strokeWidth={3}
                dot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="어제" 
                stroke="#DCDCDC" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p style={{ 
            marginTop: '10px', 
            fontSize: '14px', 
            color: '#666',
            textAlign: 'center'
          }}>
            * 매일 00시에 초기화됩니다
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;