import PropTypes from 'prop-types';

const Button = ({ run, text, disabled }) => {
  const onClick = (e) => {
    e.preventDefault();
    run();
  };
  return (
    <button type="button" onClick={onClick} disabled={disabled}>{text}</button>
  );
};

export default Button;

Button.propTypes = {
  run: PropTypes.func.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: 'button',
  disabled: false,
};
