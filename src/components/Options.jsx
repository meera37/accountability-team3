import React,{useState} from 'react'

function Options() {

const [selected, setSelected] = useState(null);

const handleClick = (id) => {
  setSelected(id);
  
};

  const options = [
    {
      id: "red",
      description: "option 1",
      color: "#e74c3c",
    },
    {
      id: "blue",
      description: "option 2",
      color: "#3498db",
    },
    {
      id: "green",
      description: "option 3",
      color: "#2ecc71",
    },
  ];

  return (
    <div className="lg:mt-[20px] bg-amber-300 mt-5 p-5 rounded shadow border boeder-3 mb-5">
      <h2 className="text-center text-2xl fw-bold mb-5">Options</h2>

      <div className="checkbox-container">
        {
          options.map((option) => {
          const isSelected = selected === option.id;
          const isDimmed = selected !== null && !isSelected;

          return (
            <div
              key={option.id}
              className="checkbox-option clean-style"
              style={{
                opacity: isDimmed ? 0.5 : 1,
                borderColor: isSelected ? option.color : "#ccc",
              }}
              onClick={() => handleClick(option.id)}
            >
              <div
                className="color-indicator"
                style={{
                  backgroundColor: isSelected ? option.color : "transparent",
                }}
              />
              <div className="text-content">
                <small className="checkbox-description">{option.description}</small>
              </div>
            </div>
          );
          })
        }
      </div>

    </div>
  )
}

export default Options