import { clear } from "@testing-library/user-event/dist/clear";
import React, {useEffect} from "react";
import Chirps from "./Chirps";

// const Timeline = () => {
//   const [myArray, setMyArray] = useState([ ]);
//   const onClick = () => {
//       setMyArray(arr => [...arr, `${arr.length}`] );
//   }

// const [state, setState] = useState({ message: " "})

//     const handleChange = e => {
//         setState({
//             [e.target.value]: e.target.message
//         })
//       }

//       const handleSubmit = (e) => {
//
//         e.preventDefault();
//       }

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    let msg = document.getElementById("chirpWrapper");
    let newPara = document.createElement("p");
    newPara.style.backgroundColor = "deeppink";
    newPara.style.margin="8px";
    newPara.style.padding="5px";
    newPara.className = "chirp";
    newPara.textContent = this.state.value + " " + Date();
    msg.appendChild(newPara);
    event.preventDefault();
  }

  

  render() {
      
    return (
      <form
        className="form-control m-5 p-5 bg-info text-white"
        onSubmit={this.handleSubmit}
      >
        <div className="container-fluid " id="oldChirps">
          <Chirps value="Good morning, Chirpers!" />
          <Chirps value="What's your favorite morning ritual" />
          <Chirps value="Mine is having a cup of green tea" />
          <>
            <label className="m-3">
              <div id="chirpWrapper"></div>
            </label>
          </>
        </div>

        <textarea
          className="form-control"
          placeholder="comments"
          rows="4"
          name="message"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    );
  }
}

export default Timeline;
