import type { NextPage } from "next";
import MyComponent from "../components/MyComponent";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Food from "../components/Food";
import Alert from "../components/Alert";
import { useState } from "react";

const food = ["Pizza", "Hamburger", "Coke"];
let clickCount = 0;

const MyFrontPage: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [printed, setPrinted] = useState("Click button to print..");

  const handleClick = (e: any) => {
    e.preventDefault();
    clickCount++;
    console.log(`Clicked! - ${clickCount} - ${inputValue}`);
    inputValue !== ""
      ? setPrinted(inputValue)
      : setPrinted("You didn't type anything..");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("Change", inputValue);
  };

  return (
    <>
      <MyComponent />
      <MyComponent title="It works!" />
      <Wrapper styleClass="flex">
        <Title title="Wrapped first child" />
        <Title title="Wrapped second child" />
        <Title title="Wrapped third child" />
      </Wrapper>
      <Food foodList={food} />
      <Alert
        handleClickProp={handleClick}
        handleChangeProp={handleChange}
        inputValue={inputValue}
      />
      <p>{printed}</p>
    </>
  );
};

export default MyFrontPage;
