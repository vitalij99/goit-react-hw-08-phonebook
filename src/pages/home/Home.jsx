import { Section } from 'components/Section/Section';
import style from './Home.module.scss';
import Btn from 'components/btn/btn';
import { useSelector } from 'react-redux';
import { selectIsisLoggedIn, selectUser } from 'pages/login/selectors';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsisLoggedIn);
  const { name } = useSelector(selectUser);
  const href = isLoggedIn ? '/contacts' : '/register';
  const textBtn = isLoggedIn ? 'Contacts' : 'Get Started';
  const text = isLoggedIn
    ? `Hello ${name}`
    : 'We suggest you use our phone book';
  return (
    <>
      <Section title="Phonebook">
        <div className={style.home}>
          <p className={style.text}>{text}</p>
          <NavLink to={href} className={style.link}>
            <Btn>{textBtn}</Btn>
          </NavLink>
        </div>
      </Section>
    </>
  );
};
