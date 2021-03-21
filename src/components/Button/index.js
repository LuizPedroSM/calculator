import PropTypes from 'prop-types';

import './styles.css';

function Button({ children, className }) {
  return (
    <button type="button" className={`btn ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
