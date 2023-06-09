import PropTypes from "prop-types";
import { Button, InlineButtons } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <InlineButtons>
      {options.map((el) => {
        return (
          <div key={el}>
            <Button type="button" name={el} onClick={onLeaveFeedback}>
              {el}
            </Button>
          </div>
        );
      })}{" "}
    </InlineButtons>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
