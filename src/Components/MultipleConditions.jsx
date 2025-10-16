import React from "react";

const MultipleConditions = () => {
  const age = 18;

  return (
    <div>
        <h1>CHALLENGE 3 </h1>
      {
        age > 17 
          ? <p>You are allowed to enter</p> 
          : (age === 16 || age === 17 
              ? <p>You are almost there</p> 
              : <p>Access Denied</p>
            )
      }
    </div>
  );
};

export default MultipleConditions;
