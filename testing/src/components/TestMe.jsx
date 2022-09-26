import { useState } from "react";

export const TestMe = () => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    pass: "",
    repeatPass: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    info.pass === info.repeatPass
      ? console.log(info)
      : alert("Password not matching");
  };

  return (
    <div>
      <h1>Testing assignment:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          id="name"
          data-testid="name"
          type="text"
          value={info.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age: </label>
        <input
          name="age"
          id="age"
          data-testid="age"
          type="number"
          value={info.age}
          onChange={handleChange}
        />
        <label htmlFor="pass">Password: </label>
        <input
          name="pass"
          id="pass"
          type="password"
          value={info.pass}
          onChange={handleChange}
        />
        <label htmlFor="repeatPass">Repeat password: </label>
        <input
          name="repeatPass"
          id="repeatPass"
          type="password"
          value={info.repeatPass}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Log my information
        </button>
      </form>
    </div>
  );
};
