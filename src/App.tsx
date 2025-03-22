import "./App.css";
import { Unit } from "./Unit";
import UnitCard from "./Unit";

function App() {
  const unit1: Unit = {
    name: "hello",
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <UnitCard unit={unit1} />
      </div>
    </>
  );
}

export default App;
