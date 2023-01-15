import React from "react";
import { createRoot } from "react-dom/client";

class Main extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div>Hello World!</div>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
