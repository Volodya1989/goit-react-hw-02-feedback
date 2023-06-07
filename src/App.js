// Separate named imports, this makes the code more readable
import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOnClick = (e) => {
    const currentEl = e.currentTarget.name;
    this.setState((prevState) => {
      return { [currentEl]: prevState[currentEl] + 1 };
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
    const totalNumberOfFeedbacks = this.countTotalFeedback();
    const totalPercentageOfFeedbacks = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={(e) => this.handleOnClick(e)}
        />

        <h2>Statistics</h2>

        {totalNumberOfFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalNumberOfFeedbacks}
            positivePercentage={totalPercentageOfFeedbacks}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
export default App;
