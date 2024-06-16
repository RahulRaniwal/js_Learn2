import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedin);
  };
  const handleLogout = () => {
    setIsLoggedIn(!isLoggedin);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedin ? "Logged in" : "Logged out"}</div>
    </div>
  );
};

export default LoggedIn;
