import React from 'react';

const Home = () => {
  
  const style = {
    backgroundColor: 'pink', 
    color: 'purple', 
    fontFamily: 'Comic Sans MS, cursive, sans-serif', 
    textAlign: 'center',
    padding: '100px 20px', 
    border: '5px dotted yellow',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  const titleStyle = {
    fontSize: '50px',
    textShadow: '2px 2px 5px red',
    marginBottom: '20px', 
  };

  const paragraphStyle = {
    fontSize: '25px',
    marginBottom: '40px', 
  };

  const buttonStyle = {
    backgroundColor: 'limegreen', 
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '25px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s',
  };

  
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = 'darkgreen';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = 'limegreen';
  };

  return (
    <div style={style}>
      <h1 style={titleStyle}>Welcome to the Wacky Quiz Game!</h1>
      <p style={paragraphStyle}>Are you ready to test your knowledge?</p>
      {/* Bad practice: No event handler; the button does nothing */}
      <button
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Start Quiz!
      </button>
      {/* Wacky background - creating a tiling effect with repeated divs */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue',
        zIndex: -1,
        backgroundImage: 'url(https:
        backgroundSize: '100px 100px',
      }} />
    </div>
  );
};

export default Home;
