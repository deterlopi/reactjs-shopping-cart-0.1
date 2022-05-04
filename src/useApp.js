import { useEffect, useState } from 'react';

export const useApp = () => {
  const [userLogged, setUserLogged] = useState({});
    
  useEffect(() => {
      const loggedUserStr = localStorage.getItem('loggedUser');
      const loggedUser = JSON.parse(loggedUserStr);
      setUserLogged(loggedUser);
  }, []);

  const isAdmin = userLogged?.role === 'admin';
  return {
    isAdmin
  }
};
