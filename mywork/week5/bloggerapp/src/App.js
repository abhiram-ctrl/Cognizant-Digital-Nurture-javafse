import { useState } from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const [view, setView] = useState("books");

  let content;

  // Method 1: Element Variable + if...else
  if (view === "books") {
    content = <BookDetails />;
  } else if (view === "blogs") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Blogger Application</h1>

      <button onClick={() => setView("books")}>
        Books
      </button>

      <button
        onClick={() => setView("blogs")}
        style={{ marginLeft: "10px" }}
      >
        Blogs
      </button>

      <button
        onClick={() => setView("courses")}
        style={{ marginLeft: "10px" }}
      >
        Courses
      </button>

      <hr />

      {content}

      {/* Method 2: Logical AND */}
      {view === "books" && <p>Showing Book Details</p>}

      {/* Method 3: Ternary Operator */}
      <h3>
        {view === "courses"
          ? "Course Section"
          : "Not Viewing Courses"}
      </h3>

    </div>
  );
}

export default App;