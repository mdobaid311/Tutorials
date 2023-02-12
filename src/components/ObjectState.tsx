import React, { useState } from "react";

const ObjectState = () => {
  const [person, setPerson] = useState<{ name: string; age: number }>(
    {} as { name: string; age: number }
  );

  const handleLogin = () => {
    setPerson({ name: "Oscar", age: 32 });
  };

  const handleLogout = () => {
    setPerson({ name: "", age: 22 });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {person?.name
        ? `Name: ${person.name} Age: ${person.age}`
        : "User logged out"}
    </div>
  );
};

export default ObjectState;
