import style from './btn.module.scss';
import PropTypes from 'prop-types';
const Btn = ({ children, type = 'button', fn = null }) => {
  return (
    <button className={style.button} type={type} onClick={fn}>
      {children}
    </button>
  );
};

export default Btn;
Btn.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  fn: PropTypes.func,
};
