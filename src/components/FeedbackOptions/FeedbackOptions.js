import PropTypes from "prop-types";
import shortid from "shortid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((el) => {
        const short_id = shortid.generate();
        return (
          <div key={short_id}>
            <button type="button" name={el} onClick={onLeaveFeedback}>
              {el}
            </button>
          </div>
        );
      })}{" "}
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
