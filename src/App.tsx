import "./App.css";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";
import { Auth } from "./Auth";

const client = generateClient<Schema>();

function App() {
  const handleName = async () => {
    const name = await client.queries.hello({ name: "Bart" });
    console.log(name);
  };

  return (
    <>
      <div>
        <button onClick={handleName}>click</button>
        <Auth />
      </div>
    </>
  );
}

export default App;
