import React from 'react';

export default function App() {
  return (
    <div style={{
      backgroundColor: '#020202',
      color: '#00f2ff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', margin: '0' }}>TITAN X</h1>
      <p style={{ color: '#64748b' }}>系統診斷模式：基礎環境已啟動</p>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #00f2ff40', borderRadius: '4px' }}>
        如果您看到此畫面，請告訴我，我將立刻恢復完整介面。
      </div>
    </div>
  );
}
