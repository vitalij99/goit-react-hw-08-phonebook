import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import Btn from 'components/btn/btn';

export const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label className={style.title}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.title}>
        phone
        <input
          className={style.input}
          placeholder="000-00-00"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Btn type={'submit'}>Add contact</Btn>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
