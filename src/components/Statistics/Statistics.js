import PropTypes from "prop-types";

const Statistics = (props) => {
  const keys = Object.keys(props);

  return (
    <>
      <ul>
        {keys.map((key) => {
          return (
            <li key={key}>
              {key}: {props[key]}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
