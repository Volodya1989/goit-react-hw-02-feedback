// Separate named imports, this makes the code more readable
import { Component } from "react";
import shortid from "shortid";
import Statistics from "./components/Statistics";

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
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const result = `${Math.round((good / (good + neutral + bad)) * 100)} %`;
    return result;
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
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default App;
