# Installation
```
npm i time-left-bar
```

# Example Usage
```js
import { TimeLeftBar } from "time-left-bar";

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
