import PropTypes from 'prop-types';

const Button = ({ run, text }) => {
  const onClick = (e) => {
    e.preventDefault();
    run();
  };
  return (
    <button type="button" onClick={onClick}>{text}</button>
  );
};

export default Button;

Button.propTypes = {
  run: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'button',
};
