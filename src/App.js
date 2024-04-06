import './App.css';

import {useState} from 'react';

const App = () => {
  const [employee, setEmployee] = useState({
    id: 1,
    name: 'Alice',
    salary: 100,
  });

  const key = 'salary';

  // ✅ Access state using dynamic key
  console.log(employee[key]); // 👉️ 100

  const handleClick = () => {
    // ✅ Set state using dynamic key
    setEmployee({...employee, [key]: employee.salary + 100});
  };

  return (
    <div>
      <button onClick={handleClick}>Increase salary</button>

      <h2>id: {employee.id}</h2>
      <h2>name: {employee.name}</h2>
      <h2>salary: {employee.salary}</h2>
    </div>
  );
};

export default App;
