import * as React from "react";
import Intro from "../components/intro";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Intro pageTitle="Dale Greve">
      <h2 className="text-3xl text-white">Creativity Through Code</h2>
    </Intro>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>DSG | Web Artisan</title>;

// Step 3: Export your component
export default IndexPage;
