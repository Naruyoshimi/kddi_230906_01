import "./styles.css";
import Map from "./Map";
import getCSV from "./getCSV";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Map />
        <getCSV />
      </div>
    </>
  );
}
