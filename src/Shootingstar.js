import React from 'react';

class ShootingStar extends React.Component {
  animateStar() {
    const star = document.getElementById('star');

    // Set initial position of the star
    star.style.left = '0';
    star.style.bottom = '0';
    star.style.display = 'block';

    // Animate the star
    const animation = star.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: 'translate(100%, -100%)' }
      ],
      {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out'
      }
    );

    // Remove the star after animation completes
    animation.onfinish = () => {
      star.style.display = 'none';
    };
  }

  render() {
    return (
      <div>
        <button type='button' className='primaryBtn' onClick={this.animateStar}>Add</button>
        <div id='star' className='shooting-star'></div>
      </div>
    );
  }
}

export default ShootingStar;
