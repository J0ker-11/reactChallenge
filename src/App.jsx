import Button from "./Components/Button";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  return (
    <>
      <h1 className="text-4xl my-3"> CHALLENGE 1</h1>
      <h2 className="mb-2">Reusable Button Challenge ✅</h2>
      <Button text="Click Me" type="primary" />
      <br />
      <br />
      <Button text="Delete" type="danger" />
      <br />
      <br />
      <Button text="Edit" type="secondary" />

      <ProfileCard name="John Doe" role="Frontend Developer" age={22} />
    </>
  );
};

export default App;
