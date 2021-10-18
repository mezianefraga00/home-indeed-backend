import React from "react";

function Logout() {
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", { method: "DELETE" });
  }

  return <button onClick={() => handleLogout}>Logout</button>;
}
export default Logout;
