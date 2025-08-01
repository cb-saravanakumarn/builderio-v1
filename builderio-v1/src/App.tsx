import React from "react";
import "./App.css";
import "@chargebee/sting-react/sting-react.scss";
import { BuilderComponent, builder } from "@builder.io/react";
import "./lib/builder-registry";
import { SButton } from "@chargebee/sting-react";
builder.init("6fc8a239bb834197943148b3e4ca1946");

function App() {
  return (
    <div className="App">
      {/* <SButton>Click me</SButton> */}
      <BuilderComponent
        model="page"
        content={undefined} // This will be populated by Builder
      />
    </div>
  );
}

export default App;
