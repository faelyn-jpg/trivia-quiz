import React from 'react';

const Home = () => {
  // Updated styles for better spacing
  const style = {
    backgroundColor: 'pink', // Wacky background color
    color: 'purple', // Text color
    fontFamily: 'Comic Sans MS, cursive, sans-serif', // Comic Sans font
    textAlign: 'center',
    padding: '100px 20px', // Increased padding for more space
    border: '5px dotted yellow',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    minHeight: '100vh', // Ensure the content fills the screen height
    display: 'flex', // Flexbox for layout
    flexDirection: 'column', // Arrange elements vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  };

  const titleStyle = {
    fontSize: '50px',
    textShadow: '2px 2px 5px red',
    marginBottom: '20px', // Space below the title
  };

  const paragraphStyle = {
    fontSize: '25px',
    marginBottom: '40px', // Space below the paragraph
  };

  const buttonStyle = {
    backgroundColor: 'limegreen', // Button color
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '25px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s',
  };

  // Change button color on hover (bad practice)
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
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
        backgroundSize: '100px 100px',
      }} />
    </div>
  );
};

export default Home;
