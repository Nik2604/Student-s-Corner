import React, { useState } from "react";
import "./App.css";

function New() {
  const [showCollege, setShowCollege] = useState(false);

  const handleAnimationEnd = () => {
    setShowCollege(true);
  };

  return (
    <div className="App">
      <div className="boy-container">
        <div className="boy" onAnimationEnd={handleAnimationEnd} />
      </div>
      {showCollege && <div className="college" />}
    </div>
  );
}

export default New;
