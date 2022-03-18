import React, {useState} from "react";

const Chirp = (props) => {
    const [time] = useState(Date());
    
  return (
    <div>
      <p className="chirp m-2 bg-success m-2 p-2">{props.value} {time}</p>
    </div>
  );
};

export default Chirp;
