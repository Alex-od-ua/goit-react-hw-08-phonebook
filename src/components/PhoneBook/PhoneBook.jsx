import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './PhoneBook.module.css';

export function PhoneBook() {
  return (
    <div className={css.phonebook}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
