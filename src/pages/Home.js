import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="container"
        style={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col" style={{}}>
          <h1>Joevano</h1>
          <h1>8</h1>
          <h2>Tasks Completed This Week</h2>
          <h3>Week 1</h3>
          <ul style={{ listStyle: "none" }}>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
          </ul>
        </div>
        <div className="col">
          <h1>Joevano</h1>
          <h1>8</h1>
          <h2>Tasks Completed This Week</h2>
          <h3>Week 1</h3>
          <ul>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
            <li>TJBL - Express</li>
          </ul>
        </div>
      </div>
      <div className="main" style={{ height: "100vh" }}>
        Test
      </div>
    </>
  );
};

export default Home;
