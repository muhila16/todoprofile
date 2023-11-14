import React, { useEffect } from 'react';
import './SmokeComponent.css';

const SmokeComponent = () => {
  useEffect(() => {
    let text = document.getElementById("text");
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      text.style.fontSize = value * 1 + "px";
    });

    return () => {
      // Cleanup code (if needed)
      window.removeEventListener("scroll", function () {
        let value = window.scrollY;
        text.style.fontSize = value * 1 + "px";
      });
    }
  }, []);

  return (
    <div className="bg">
      <div className="fog">
        <img src="images/fog1.png" style={{'--i': '1'}} alt="fog1" />
        <img src="images/fog2.png" style={{'--i': '2'}} alt="fog2" />
        <img src="images/fog3.png" style={{'--i': '3'}} alt="fog3" />
        <img src="images/fog4.png" style={{'--i': '4'}} alt="fog4" />
        <img src="images/fog5.png" style={{'--i': '5'}} alt="fog5" />
        <img src="images/fog1.png" style={{'--i': '10'}} alt="fog6" />
        <img src="images/fog2.png" style={{'--i': '9'}} alt="fog7" />
        <img src="images/fog3.png" style={{'--i': '8'}} alt="fog8" />
        <img src="images/fog4.png" style={{'--i': '7'}} alt="fog9" />
        <img src="images/fog5.png" style={{'--i': '6'}} alt="fog10" />
      </div>
    </div>
  );
}

export default SmokeComponent;
