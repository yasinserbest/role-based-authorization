import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (role) => {},
  user: {
    roles: [],
  },
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    roles: [],
  });

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser({
      roles: [],
    });
  };
  const loginHandler = (role) => {
    setIsLoggedIn(true);
    user.roles.push(role);
    setUser(user);
    console.log(isLoggedIn, user.roles);
    //tabii burda check etmen lazım fakat bu bir demo app
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
