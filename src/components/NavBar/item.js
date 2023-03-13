import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home ',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Contacts page',
    link: '/contacts',
  },
  {
    id: nanoid(),
    text: 'Login page',
    link: '/login',
  },
  {
    id: nanoid(),
    text: 'Register page',
    link: '/register',
  },
];

export default items;
