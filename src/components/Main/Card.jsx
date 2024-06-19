import React, { useState } from "react";

const Card = ({ data }) => {
  const [showOptions, setShowOptions] = useState(new Array(data.length).fill(true));

  const handleToggleShowOptions = (index) => {
    const updatedOptions = [...showOptions];
    updatedOptions[index] = !updatedOptions[index]; 
    setShowOptions(updatedOptions);
  };
  


  return (
    <>
      {data.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleToggleShowOptions(index)}
        >
          {showOptions[index] ? (
            <>
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="card-name">
                <p>{item.name}</p>
              </div>
            </>
          ) : (
            <>
              <ul>
                {item.options.map((item, optionsIndex) => (
                  <li key={optionsIndex}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Card;
