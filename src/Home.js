import React from 'react';
import Header from './Container/Header';
import Table from './Container/Table';
import Filter from './Container/Filter';
import Card from './Container/Card';

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/restarent_home.png')",  // ✅ Update with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "px",
      }}
    >
      {/* ✅ Header Always on Top */}
      <div style={{ width: "100%", position: "fixed", top: 0, left: 0, background: "rgba(0, 0, 0, 1)",  }}>
        <Header />
      </div>

      {/* ✅ Content Below Header */}
      <div style={{ marginTop: "80px", textAlign: "center" }}>  {/* Adjust marginTop as needed */}
        <Table />
        <Filter />
        <Card />
      </div>
    </div>
  );
};

export default Home;
