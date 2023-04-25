import style from './btn.module.scss';
const Btn = ({ children, type }) => {
  return (
    <button className={style.button} type={type}>
      {children}
    </button>
  );
};

export default Btn;
