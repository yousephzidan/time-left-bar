# Example Usage
```js
import { TimeLeftBar } from "min-pb";

function App() {
  function greet() {
    console.log("hello world");
  }
  return (
    <>
      <TimeLeftBar
        barWidth={{ value: 150, unit: "px" }}
        barHeight="30px"
        barColor="blue"
        totalTime={5000}
        callFn={greet}
      />
    </>
  );
}

export default App;
```
