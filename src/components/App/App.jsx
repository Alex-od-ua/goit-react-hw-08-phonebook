import { BrowserRouter } from 'react-router-dom';

import NavBar from 'components/NavBar/NavBar';
import UserRoutes from './UserRoutes';

export function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
}
