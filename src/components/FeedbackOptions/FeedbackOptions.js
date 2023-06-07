import PropTypes from "prop-types";
import shortid from "shortid";
import { Button, InlineButtons } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <InlineButtons>
      {options.map((el) => {
        const short_id = shortid.generate();
        return (
          <div key={short_id}>
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
};
