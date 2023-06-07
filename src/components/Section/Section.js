import PropTypes from "prop-types";

const Section = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
