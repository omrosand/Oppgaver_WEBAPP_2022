import "../styles/globals.scss";
import MyComponent from "../components/MyComponent";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Food from "../components/Food";
import Alert from "../components/Alert";

const food = ["Pizza", "Hamburger", "Coke"];

function MyApp({ inputValue, setInputValue }: any) {
  const handleClick = (e: any) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(`Clicked! - ${randomNumber} - ${inputValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("Change", inputValue);
  };

  return (
    <>
      {/* Oppgave 1 */}
      <MyComponent />
      {/* Oppgave 2 + 3 */}
      <MyComponent title="It works!" />
      {/* Oppgave 4 + 5 */}
      <Wrapper styleClass="flex">
        <Title title="Wrapped first child" />
        <Title title="Wrapped second child" />
        <Title title="Wrapped third child" />
      </Wrapper>
      {/* Oppgave 6 + 7 */}
      <Food foodList={food} />
      {/* Oppgave 8 + 9 + 10 + 11*/}
      <Alert handleClick={handleClick} handleChange={handleChange} />
    </>
  );
}

export default MyApp;
