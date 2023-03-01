import PropTypes from 'prop-types';

const Button = ({
  run, text, disabled, className,
}) => {
  const onClick = (e) => {
    e.preventDefault();
    run();
  };
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  run: PropTypes.func.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  text: 'button',
  disabled: false,
  className: '',
};
