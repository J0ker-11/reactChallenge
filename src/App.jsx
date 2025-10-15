import Button from "./Components/Button";

const App = () => {
  return (
    <>
      <h1>Reusable Button Challenge ✅</h1>
      <Button text="Click Me" type="primary" />
      <br /><br />
      <Button text="Delete" type="danger" />
      <br /><br />
      <Button text="Edit" type="secondary" />
    </>
  );
};

export default App;
