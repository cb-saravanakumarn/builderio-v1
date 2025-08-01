// App.js or your main component
import React, { useState, useEffect } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "./lib/builder-registry";

builder.init("7f58433da349460a86f2bfe8f11285ed");

function App() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    // Debug: Log the current URL and builder state
    console.log("Current URL:", window.location.pathname);
    console.log("Is previewing:", isPreviewing);

    builder
      .get("page", {
        url: window.location.pathname,
        // Add this for debugging
        options: { includeUnpublished: true },
      })
      .promise()
      .then((content) => {
        console.log("Builder content received:", content);
        setContent(content);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Builder content error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return (
      <div>
        <h2>No content found</h2>
        <p>URL: {window.location.pathname}</p>
        <p>Is Previewing: {isPreviewing ? "Yes" : "No"}</p>
      </div>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}

export default App;
