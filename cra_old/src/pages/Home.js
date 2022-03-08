import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly justify-items-center content-center items-center text-center h-100">
        <div className="col">
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
    </>
  );
};

export default Home;
