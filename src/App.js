// Separate named imports, this makes the code more readable
import { Component } from "react";
import shortid from "shortid";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOnClick = (e) => {
    const currentEl = e.currentTarget.name;
    this.setState((el) => {
      return { [currentEl]: el[currentEl] + 1 };
    });
  };
  handleTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  handlePositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  options = ["good", "neutral", "bad"];
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        {this.options.map((el) => {
          const short_id = shortid.generate();
          return (
            <div key={short_id}>
              <button type="button" name={el} onClick={this.handleOnClick}>
                {el}
              </button>
            </div>
          );
        })}
        <ul>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>Bad:{bad}</p>
          </li>
          <li>
            <p>Total:{this.handleTotal()}</p>
          </li>
          <li>
            <p>Positive Feedback:{this.handlePositiveFeedback()}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
