import PropTypes from "prop-types";
import { Li, List, Numbers } from "./Statistics.styled";

const Statistics = (props) => {
  const keys = Object.keys(props);

  return (
    <>
      <List>
        {keys.map((key) => {
          return (
            <Li key={key}>
              {key.split(/(?=[A-Z])/).join(" ")}:{" "}
              <Numbers>{props[key]}</Numbers>
            </Li>
          );
        })}
      </List>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
