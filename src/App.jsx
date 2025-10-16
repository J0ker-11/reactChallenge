import Button from "./Components/Button";
import ProductList from "./Components/ProductList";
import ProfileCard from "./Components/ProfileCard";
import CourseList from "./Components/CourseList";
import ShowMore from "./Components/ShowMore";
import LoginStatus from "./Components/LoginStatus";
import MultipleConditions from "./Components/MultipleConditions";

const App = () => {
  return (
    <>
      <h1 className="text-4xl">PROPS AND DESTRUCTURING PROPS TASK</h1>
      <h2 className="text-2xl my-3"> CHALLENGE 1</h2>
      <h2 className="mb-2">Reusable Button Challenge ✅</h2>
      <Button text="Click Me" type="primary" />
      <br />
      <br />
      <Button text="Delete" type="danger" />
      <br />
      <br />
      <Button text="Edit" type="secondary" />
      <ProfileCard name="John Doe" role="Frontend Developer" age={22} />
      <ProductList />
      <CourseList />
      <h1 className="text-4xl my-5"> CONDITIONAL RENDERING TASKS</h1>
      <ShowMore />
      <LoginStatus />
      <MultipleConditions />
    </>
  );
};

export default App;
