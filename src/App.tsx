import { useState } from "react";
import type { ChangeEvent } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  async function sayHello() {
    try {
      const { data } = await client.queries.hello({ name });
      setGreeting(data ?? "");
    } catch (error) {
      console.error("Failed to invoke hello query", error);
      setGreeting("Something went wrong.");
    }
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <main>
      <h1>Say hello</h1>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onNameChange}
        />
        <button onClick={sayHello}>Greet</button>
      </div>
      {greeting && <p style={{ marginTop: "1rem" }}>{greeting}</p>}
      <div>
        🥳 App successfully hosted. Try calling the hello query.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
