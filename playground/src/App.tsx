import { Button } from "@dse/react/lib";
const App = () => {
  return (
    <div>
      <h1>Hello Mono Repo</h1>
      <Button
        title="I am a cute little button"
        onClick={() => alert("Hello World")}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
