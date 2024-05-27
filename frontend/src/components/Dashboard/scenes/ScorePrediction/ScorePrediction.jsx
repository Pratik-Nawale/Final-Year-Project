import React, { useState } from "react";
import "./ScorePrediction.css";
import axios from "axios";

const ScorePrediction = () => {
  const [upperLimit, setUpperLimit] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);

  const [predictionData, setpredictionData] = useState({
    "batting-team": "",
    "bowling-team": "",
    overs: "",
    runs: "",
    wickets: "",
    runs_in_prev_5: "",
    wickets_in_prev_5: "",
  });

  const handlepredictionChange = (event) => {
    const { name, value } = event.target;
    setpredictionData({
      ...predictionData,
      [name]: value,
    });
  };

  // const predictHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(predictionData);
  //   const res = await axios.post(
  //     `http://127.0.0.1:5000/predict`,
  //     predictionData
  //   );
  //   console.log(res);
  //   // setLowerLimit(res - 10);
  //   // setUpperLimit(res + 5);
  // };
  const predictHandler = async (e) => {
    e.preventDefault();
    // console.log(predictionData);
    try {
      const res = await axios.post(
        `http://127.0.0.1:5000/predict`,
        predictionData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res.data);
      // console.log(res.data.lower_limit);
      // console.log(res.data.upper_limit);
      setLowerLimit(res.data.lower_limit);
      setUpperLimit(res.data.upper_limit);
      // Handle response
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div id="prediction-box">
      <form onSubmit={predictHandler} method="POST">
        <select
          class="form-input align-center"
          name="batting-team"
          value={predictionData["batting-team"]}
          onChange={handlepredictionChange}
        >
          <option value="none">--- Select a Batting team ---</option>
          <option value="Mumbai Indians">Mumbai Indians</option>
          <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
          <option value="Chennai Super Kings">Chennai Super Kings</option>
          <option value="Rajasthan Royals">Rajasthan Royals</option>
          <option value="Kings XI Punjab">Kings XI Punjab</option>
          <option value="Royal Challengers Bangalore">
            Royal Challengers Bangalore
          </option>
          <option value="Delhi Daredevils">Delhi Daredevils</option>
          <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
        </select>
        <br />
        <select
          class="form-input align-center"
          name="bowling-team"
          value={predictionData["bowling-team"]}
          onChange={handlepredictionChange}
        >
          <option value="none">--- Select a Bowling team ---</option>
          <option value="Mumbai Indians">Mumbai Indians</option>
          <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
          <option value="Chennai Super Kings">Chennai Super Kings</option>
          <option value="Rajasthan Royals">Rajasthan Royals</option>
          <option value="Kings XI Punjab">Kings XI Punjab</option>
          <option value="Royal Challengers Bangalore">
            Royal Challengers Bangalore
          </option>
          <option value="Delhi Daredevils">Delhi Daredevils</option>
          <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
        </select>
        <br />
        <input
          class="form-input"
          type="text"
          name="overs"
          placeholder="Overs (>= 5.0) eg. 7.2"
          value={predictionData.overs}
          onChange={handlepredictionChange}
        />
        <br />
        <input
          class="form-input"
          type="text"
          name="runs"
          placeholder="Runs eg. 64"
          value={predictionData.runs}
          onChange={handlepredictionChange}
        />
        <br />
        <input
          class="form-input"
          type="text"
          name="wickets"
          placeholder="Wickets eg. 4"
          value={predictionData.wickets}
          onChange={handlepredictionChange}
        />
        <br />
        <input
          class="form-input"
          type="text"
          name="runs_in_prev_5"
          placeholder="Runs scored in previous 5 Overs eg. 42"
          value={predictionData.runs_in_prev_5}
          onChange={handlepredictionChange}
        />
        <br />
        <input
          class="form-input"
          type="text"
          name="wickets_in_prev_5"
          placeholder="Wickets taken in previous 5 Overs eg. 3"
          value={predictionData.wickets_in_prev_5}
          onChange={handlepredictionChange}
        />
        <br />

        <input type="submit" class="myButton" value="Predict Score" />
      </form>

      <div id="predicted-score">
        <h2>
          The final predicted score (range): {lowerLimit} to {upperLimit}
        </h2>
      </div>
    </div>
  );
};

export default ScorePrediction;
