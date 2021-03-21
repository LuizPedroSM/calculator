import PropTypes from 'prop-types';

import './styles.css';

function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} type="button" className={`btn ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  className: '',
  onClick: () => null,
};

export default Button;
