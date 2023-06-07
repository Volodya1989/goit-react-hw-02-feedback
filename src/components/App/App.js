// Separate named imports, this makes the code more readable
import { Component } from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";
import { Container } from "components/App/App.styled";

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
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={(e) => this.handleOnClick(e)}
          />
        </Section>

        <Section title="Statistics">
          {totalNumberOfFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalNumberOfFeedbacks}
              positiveFeedback={totalPercentageOfFeedbacks}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;
